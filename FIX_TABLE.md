# ✅ FIX: Create the Table in Supabase

## The Error:
```
Could not find the table 'public.submissions'
```

## The Fix (2 minutes):

### Step 1: Go to Supabase SQL Editor

1. Go to [supabase.com](https://supabase.com)
2. Open your project
3. Click **"SQL Editor"** (left sidebar)
4. Click **"New query"**

### Step 2: Run This SQL

Copy and paste this entire SQL code:

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

### Step 3: Execute

1. Click the **"Run"** button (or press `Ctrl+Enter`)
2. Wait a few seconds
3. You should see: **"Success. No rows returned"** ✅

### Step 4: Verify

1. Go to **"Table Editor"** (left sidebar)
2. You should see **"submissions"** table
3. Click on it - you'll see the columns: id, name, plan, rating, creative_response, created_at

### Step 5: Test Your App

1. Go back to your Vercel app
2. Submit the form
3. **It should work now!** 🎉

---

## That's It!

The table is the only thing missing. Once you create it, everything will work! ✅

