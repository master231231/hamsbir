// Baked-in Supabase config (shared project, isolated per-store schema).
const env = (v: string | undefined, fallback: string) =>
  v && v.trim().length > 0 ? v.trim() : fallback;

export const SUPABASE_URL = env(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  "https://eyavvivgzlwbykjbcukh.supabase.co"
);

export const SUPABASE_ANON_KEY = env(
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5YXZ2aXZnemx3YnlramJjdWtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU1MTcxNzQsImV4cCI6MjExMTA5MzE3NH0.bHZcZQ144uKB0o9Bi_ZgoSNq04eVyQuYhpHUOFst5Kc"
);

// Which store's isolated schema this deployment reads/writes.
export const STORE_SCHEMA = env(process.env.NEXT_PUBLIC_STORE_SCHEMA, "site_mashbir");
