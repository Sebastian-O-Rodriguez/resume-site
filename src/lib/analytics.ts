/**
 * First-party analytics — privacy-friendly, no third-party scripts.
 * Tracks pageviews and clicks, stores in own Supabase Postgres.
 *
 * Usage:
 *   import '../lib/analytics';
 *   // pageview fires automatically on load
 *   // click capture: add data-track-click to any element
 *
 * Environment: PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY
 */

const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
const EVENT_URL = `${SUPABASE_URL?.replace(/\/$/, '')}/functions/v1/record-event`;

// Session: stable per localStorage, or fresh
function getSessionId(): string | null {
  try {
    let id = localStorage.getItem('rs_session_id');
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem('rs_session_id', id);
    }
    return id;
  } catch {
    return null;
  }
}

const SESSION_ID = getSessionId();

// Queue + batch
const queue: unknown[] = [];
let flushing = false;
const MAX_BATCH = 10;
const FLUSH_INTERVAL = 5000; // 5s
let flushTimer: ReturnType<typeof setTimeout> | null = null;

function enqueue(payload: unknown): void {
  queue.push(payload);
  if (queue.length >= MAX_BATCH) {
    flush();
  } else if (!flushTimer) {
    flushTimer = setTimeout(flush, FLUSH_INTERVAL);
  }
}

async function flush(): Promise<void> {
  if (flushing || queue.length === 0) return;
  flushing = true;
  if (flushTimer) {
    clearTimeout(flushTimer);
    flushTimer = null;
  }

  const batch = queue.splice(0, MAX_BATCH);

  try {
    // Fire-and-forget: send each event individually (could optimize to batch POST)
    for (const payload of batch) {
      await fetch(EVENT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY ?? '',
        },
        body: JSON.stringify(payload),
      });
    }
  } catch {
    // Silently fail — analytics never breaks the app
  } finally {
    flushing = false;
    if (queue.length > 0) setTimeout(flush, 100);
  }
}

// Flush on page unload (sendBeacon fallback)
if (typeof navigator !== 'undefined' && 'sendBeacon' in navigator) {
  window.addEventListener('pagehide', () => {
    if (queue.length === 0) return;
    try {
      const blob = new Blob([JSON.stringify(queue[0])], { type: 'application/json' });
      navigator.sendBeacon(EVENT_URL, blob);
    } catch { /* ignore */ }
  });
}

// Track pageview on load
function trackPageview(): void {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !SESSION_ID) return;
  enqueue({
    event_type: 'pageview',
    path: window.location.pathname,
    referrer: document.referrer || undefined,
    session_id: SESSION_ID,
    ua: navigator.userAgent,
  });
}

// Track clicks via delegation
function handleClick(e: MouseEvent): void {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !SESSION_ID) return;
  const target = (e.target as HTMLElement)?.closest('[data-track-click]') as HTMLElement | null;
  if (!target) return;

  enqueue({
    event_type: 'click',
    path: window.location.pathname,
    session_id: SESSION_ID,
    meta: {
      target: target.getAttribute('data-track-label') || target.textContent?.trim() || '',
      href: (target as HTMLAnchorElement).href || undefined,
    },
  });
}

// Init
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', trackPageview);
  } else {
    trackPageview();
  }
  document.addEventListener('click', handleClick);
}