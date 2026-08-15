-- Analytics events schema
-- Apply via: supabase migration up or Supabase SQL editor
-- Run this migration before deploying the record-event function.

create table if not exists public.analytics_events (
  id          bigint generated always as identity primary key,
  event_type  text not null check (event_type in ('pageview', 'click')),
  path        text not null,
  referrer    text,
  session_id  uuid not null,
  meta        jsonb default '{}'::jsonb,
  ua          text,
  created_at  timestamptz default now()
);

-- Indexes for common queries
create index if not exists idx_analytics_events_created_at
  on public.analytics_events (created_at desc);

create index if not exists idx_analytics_events_type_path
  on public.analytics_events (event_type, path);

-- Row-Level Security
alter table public.analytics_events enable row level security;

-- Allow anonymous inserts (bounded columns: no way to abuse into reading)
create policy "anon_can_insert_events"
  on public.analytics_events
  for insert
  to anon
  with check (true);

-- Deny anonymous selects (data stays private)
create policy "deny_anon_select"
  on public.analytics_events
  for select
  to anon
  using (false);

-- Authenticated users (owner/service_role) can query
create policy "authenticated_can_select"
  on public.analytics_events
  for select
  to authenticated
  using (true);

-- Grant usage
grant usage on schema public to anon, authenticated;
grant insert on public.analytics_events to anon;
grant select on public.analytics_events to authenticated;