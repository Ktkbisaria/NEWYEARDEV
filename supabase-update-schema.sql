-- Add new columns to existing submissions table
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

