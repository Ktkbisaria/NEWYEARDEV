-- Supabase Database Setup Script
-- Run this in Supabase SQL Editor

-- Create the submissions table
CREATE TABLE IF NOT EXISTS submissions (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  plan TEXT NOT NULL,
  rating INTEGER NOT NULL,
  creative_response TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (anyone can submit)
CREATE POLICY "Allow public inserts" ON submissions
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow public reads (anyone can view)
CREATE POLICY "Allow public reads" ON submissions
  FOR SELECT
  USING (true);

-- Optional: Create an index on created_at for faster queries
CREATE INDEX IF NOT EXISTS idx_submissions_created_at ON submissions(created_at DESC);

