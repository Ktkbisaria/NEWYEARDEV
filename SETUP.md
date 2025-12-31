# 🚀 Quick Setup

## ✅ Your Supabase Keys Are VALID!

Your credentials are correct:
- ✅ URL: `https://vplfrzjnbfkzaafynivq.supabase.co`
- ✅ Key: `sb_publishable_wp7T5skCFupUYs1cGrvfQw_IncSZsql`

## ⚠️ But You Need to Create the Table!

The table `submissions` doesn't exist yet. Create it:

1. Go to **Supabase** → Your Project
2. Click **"SQL Editor"** (left sidebar)
3. Click **"New query"**
4. Copy and paste this SQL:

```sql
CREATE TABLE submissions (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  plan TEXT NOT NULL,
  rating INTEGER NOT NULL,
  creative_response TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public reads" ON submissions
  FOR SELECT USING (true);
```

5. Click **"Run"**
6. Done! ✅

## 🔧 Vercel Environment Variables

Make sure these are set in Vercel:
- `EXPO_PUBLIC_SUPABASE_URL` = `https://vplfrzjnbfkzaafynivq.supabase.co`
- `EXPO_PUBLIC_SUPABASE_KEY` = `sb_publishable_wp7T5skCFupUYs1cGrvfQw_IncSZsql`

Then redeploy!

