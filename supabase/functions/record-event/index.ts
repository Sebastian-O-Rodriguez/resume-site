import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.1';

const VALID_EVENTS = new Set(['pageview', 'click']);

interface EventPayload {
  event_type: string;
  path: string;
  referrer?: string;
  session_id: string;
  meta?: Record<string, unknown>;
  ua?: string;
}

serve(async (req: Request) => {
  // CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !supabaseKey) {
    return new Response('Server configuration error', { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    const body: EventPayload = await req.json();

    // Validate
    if (!VALID_EVENTS.has(body.event_type)) {
      return new Response(
        JSON.stringify({ error: `Invalid event_type: ${body.event_type}. Must be pageview or click.` }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }
    if (!body.path || !body.session_id) {
      return new Response(
        JSON.stringify({ error: 'path and session_id are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const { error } = await supabase.from('analytics_events').insert({
      event_type: body.event_type,
      path: body.path,
      referrer: body.referrer ?? null,
      session_id: body.session_id,
      meta: body.meta ?? {},
      ua: body.ua ?? null,
    });

    if (error) throw error;

    return new Response(null, { status: 204 });
  } catch (err) {
    console.error('record-event error:', err);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
});