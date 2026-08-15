/**
 * Supabase client — shared database access.
 * Reads env vars with both naming conventions:
 *   - PUBLIC_SUPABASE_URL / PUBLIC_SUPABASE_ANON_KEY  (Vercel + client-safe)
 *   - SUPABASE_URL / SUPABASE_KEY                      (Supabase "get connected" tutorial names)
 *
 * Server-side only (Astro frontmatter). Do not import into client bundles.
 * null when env vars are missing — callers must guard (build safety).
 */
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL ?? import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? import.meta.env.SUPABASE_KEY;

export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey)
    : null;