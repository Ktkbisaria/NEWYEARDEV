-- FIX DATABASE SCHEMA - Run this in Supabase SQL Editor
-- This will add all missing columns and remove old ones

-- Add new columns (only if they don't exist)
ALTER TABLE submissions 
ADD COLUMN IF NOT EXISTS message TEXT,
ADD COLUMN IF NOT EXISTS anthem TEXT,
ADD COLUMN IF NOT EXISTS manifesting TEXT,
ADD COLUMN IF NOT EXISTS avoid TEXT,
ADD COLUMN IF NOT EXISTS honest TEXT;

-- Remove old columns that are no longer needed
ALTER TABLE submissions 
DROP COLUMN IF EXISTS confession,
DROP COLUMN IF EXISTS rating,
DROP COLUMN IF EXISTS creative_response;

-- Verify the table structure
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'submissions' 
ORDER BY ordinal_position;

