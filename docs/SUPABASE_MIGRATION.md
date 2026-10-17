# Supabase Database Migration: Projects Schema Evolution

This document specifies the backward-compatible schema evolution for the `projects` table on Supabase to support extended research metadata for the Objective Ontology and Foundations of Thought initiatives.

## Backward-Compatible Migration Script

Run this SQL in your Supabase SQL Editor:

```sql
-- 1. Ensure projects table exists with base columns
CREATE TABLE IF NOT EXISTS public.projects (
  id text PRIMARY KEY,
  number text NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  focus text[] NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- 2. Add extended metadata columns (non-breaking, nullable with sensible defaults)
ALTER TABLE public.projects
  ADD COLUMN IF NOT EXISTS category text DEFAULT 'Foundations of Thought',
  ADD COLUMN IF NOT EXISTS status text DEFAULT 'Active Investigation',
  ADD COLUMN IF NOT EXISTS research_question text,
  ADD COLUMN IF NOT EXISTS conceptual_motivation text,
  ADD COLUMN IF NOT EXISTS methodological_direction text,
  ADD COLUMN IF NOT EXISTS open_problems text;

-- 3. Enable Realtime on the projects table
ALTER PUBLICATION supabase_realtime ADD TABLE public.projects;

-- 4. Enable Row Level Security (RLS) and public read access
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on projects"
  ON public.projects FOR SELECT
  USING (true);
```

## Field Definitions

| Column | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `id` | `text` | Primary Key | Unique project slug/identifier |
| `number` | `text` | - | Display order identifier (e.g. `'01'`, `'02'`) |
| `title` | `text` | - | Project title |
| `description` | `text` | - | High-level summary of the investigation |
| `focus` | `text[]` | `'{}'` | Array of key research focus tracks |
| `category` | `text` | `'Foundations of Thought'` | Research domain (`Objective Ontology`, `Foundations of Thought`, `Scientific Discovery`) |
| `status` | `text` | `'Active Investigation'` | Progress state (`Active Investigation`, `Conceptual Formulation`, `Pre-Research`) |
| `research_question` | `text` | `NULL` | Primary question guiding the research |
| `conceptual_motivation` | `text` | `NULL` | Why this investigation is essential to the study of intelligence |
| `methodological_direction` | `text` | `NULL` | Technical, mathematical, or empirical methodology |
| `open_problems` | `text` | `NULL` | Unresolved challenges and theoretical bottlenecks |
| `created_at` | `timestamptz` | `now()` | Record creation timestamp |
