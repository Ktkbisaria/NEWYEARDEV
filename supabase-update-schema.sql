-- Add new columns to existing submissions table
ALTER TABLE submissions 
ADD COLUMN IF NOT EXISTS message TEXT,
ADD COLUMN IF NOT EXISTS anthem TEXT,
ADD COLUMN IF NOT EXISTS manifesting TEXT,
ADD COLUMN IF NOT EXISTS confession TEXT,
ADD COLUMN IF NOT EXISTS honest TEXT;

-- Note: The 'plan' column already exists, and 'creative_response' can be removed if not needed
-- If you want to remove creative_response, uncomment the line below:
-- ALTER TABLE submissions DROP COLUMN IF EXISTS creative_response;

