-- Daily analytics rollup view
-- Query this view for traffic/click counts in Supabase dashboard
create or replace view daily_events as
select
  date_trunc('day', created_at) as day,
  event_type,
  path,
  count(*) as events,
  count(distinct session_id) as unique_sessions
from public.analytics_events
group by 1, 2, 3
order by 1 desc, 2, 3;

-- Example queries for Supabase SQL Editor:
--
-- Pageviews by day (last 30):
--   select day, events, unique_sessions
--   from daily_events
--   where event_type = 'pageview'
--   order by day desc
--   limit 30;
--
-- Top clicked items:
--   select path, sum(events) as clicks
--   from daily_events
--   where event_type = 'click'
--   group by path
--   order by clicks desc
--   limit 10;
--
-- Daily unique sessions:
--   select day, sum(unique_sessions) as uniques
--   from daily_events
--   group by day
--   order by day desc
--   limit 30;