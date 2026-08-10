-- Per-user Dark Run companion progress (Google / X login via Better Auth).
-- user_id is TEXT (matches better-auth user.id and preview 'dev-user').

create table if not exists user_progress (
  user_id text not null primary key,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create index if not exists user_progress_updated_at_idx
  on user_progress (updated_at desc);
