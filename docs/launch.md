# Launch Runbook — Resume Site v1

## Domains / URLs (confirmed 2026-08)

The site lives under **two distinct domains** — do not conflate them:

| Domain | Purpose | Notes |
|---|---|---|
| **`sebastianr.dev`** | **THIS resume site** (canonical). Vercel is provisioning this as the production URL; custom-domain record (`A` → `76.76.21.21`, or CNAME per §1) and TLS auto-provision. | Use this whenever referencing the resume/site itself. |
| **`guavaai.ai`** | **Company site** (my most recent role; many projects originated there). Separate deploy, separate content. | Header link in `src/data/site.ts` is labeled **"Guava AI (company)"** and points here — it is the company, not this site. |

Canonical source of truth: `src/data/site.ts` (`links`) + this section.

## Prerequisites

- [ ] GitHub repo: `Sebastian-O-Rodriguez/resume-site.git` exists and is pushed
- [ ] You have accounts on [Vercel](https://vercel.com) and [Supabase](https://supabase.com)

---

## 1. Domain

1. **Buy or transfer a domain** at your registrar (e.g. Namecheap, Cloudflare, Porkbun)
2. **Point DNS to Vercel** — add one of these:
   - **A record**: point apex domain to `76.76.21.21`
   - **CNAME**: point `www` to `cname.vercel-dns.com`
   - **Name Servers**: redelegate to Vercel (ns1.vercel-dns.com / ns2.vercel-dns.com)
3. **Verify propagation**: `dig +short yourdomain.com` returns the Vercel IP

---

## 2. Vercel Project

1. **Import repo**:
   - Go to https://vercel.com/new
   - Import `Sebastian-O-Rodriguez/resume-site`
   - Framework preset: **Astro** (auto-detected)
   - Root directory: `./` (default)
   - Build command: `astro build` (auto)
   - Output directory: `dist` (auto)
2. **Add domain**:
   - Project → Settings → Domains → Add `yourdomain.com`
   - Follow Vercel's DNS verification steps
   - TLS (Let's Encrypt) provisions automatically
3. **Set environment variables**:
   - `PUBLIC_SUPABASE_URL`
   - `PUBLIC_SUPABASE_ANON_KEY`
   - (Values from step 3)
4. **Deploy**: push to `main` — Vercel auto-deploys. Or click "Deploy" in dashboard.

---

## 3. Supabase Project

1. **Create project** at https://supabase.com/dashboard/projects
   - Name: `resume-site`
   - Database password: save securely
   - Region: closest to your audience
2. **Copy connection strings** from Project Settings → API:
   - `Project URL` → `PUBLIC_SUPABASE_URL`
   - `anon public key` → `PUBLIC_SUPABASE_ANON_KEY`
3. **Run migrations**:
   - Option A: Supabase CLI
     ```bash
     supabase link --project-ref <ref>
     supabase db push
     ```
   - Option B: SQL Editor in Supabase Dashboard
     - Open `supabase/migrations/001_analytics_events.sql` and paste + run
     - Open `supabase/migrations/002_daily_events_view.sql` and paste + run
4. **Deploy edge function**:
   ```bash
   supabase functions deploy record-event
   ```
5. **Verify**: run in SQL Editor:
   ```sql
   -- Should return 0 rows (empty table is healthy)
   select count(*) from analytics_events;
   ```

---

## 4. First Smoke Test

1. Open the production URL (`https://yourdomain.com`)
2. Check that the page loads over HTTPS with valid certificate
3. Check dark mode toggle works
4. Open browser DevTools → Console: no errors
5. Open browser DevTools → Network: verify no external font requests

---

## 5. Verify Analytics End-to-End

1. Visit a few pages / click a few links
2. Check in Supabase SQL Editor:
   ```sql
   select event_type, count(*) from analytics_events group by event_type;
   ```
3. Should see pageviews and clicks

---

## 6. Manual Steps Remaining (after this runbook)

- [ ] **Domain registration / DNS** — needs your registrar account
- [ ] **Vercel project creation** — needs your Vercel account
- [ ] **Supabase project creation** — needs your Supabase account
- [ ] **Env vars in Vercel** — needs Supabase project keys
- [ ] **supabase link + deploy** — needs Supabase CLI auth (`supabase login`)