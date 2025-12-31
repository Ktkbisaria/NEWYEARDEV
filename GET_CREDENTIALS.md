# 🔑 Getting Your Supabase Credentials for Vercel

You've found a connection string, but for Vercel deployment, you need **two different values** from Supabase.

## ✅ What You Need (Not the Connection String!)

For Vercel, you need:
1. **Project URL** (looks like: `https://xxxxx.supabase.co`)
2. **anon public key** (a long JWT token)

**You DON'T need the PostgreSQL connection string** - that's for direct database access, not for the API.

---

## 📍 How to Get the Right Credentials

### Step 1: Go to API Settings

1. In your Supabase dashboard, look at the **left sidebar**
2. Click **"Settings"** (gear icon ⚙️ at the bottom)
3. Click **"API"** (under "Project Settings")

### Step 2: Find Your Project URL

1. Look for the section labeled **"Project URL"**
2. You'll see something like:
   ```
   https://vplfrzjnbfkzaafynivq.supabase.co
   ```
3. Click the **copy icon** (📋) next to it
4. **This is your SUPABASE_URL** - save it!

💡 **Note**: Based on your connection string, your Project URL should be:
```
https://vplfrzjnbfkzaafynivq.supabase.co
```

### Step 3: Find Your anon public Key

1. Scroll down to the **"Project API keys"** section
2. You'll see several keys listed
3. Find the one labeled **"anon public"** (it's safe to expose)
4. It looks like a long string:
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwbGZyempuYmZremFhYWZ5bml2cSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjk5OTk5OTk5LCJleHAiOjIwMTU1NzU5OTl9.xxxxx
   ```
5. Click the **copy icon** (📋) next to it
6. **This is your SUPABASE_ANON_KEY** - save it!

⚠️ **Important**: Make sure you copy the **"anon public"** key, NOT the "service_role" key (that one is secret!)

---

## ✅ What You Should Have Now

You should have saved:
- ✅ **SUPABASE_URL**: `https://vplfrzjnbfkzaafynivq.supabase.co` (or similar)
- ✅ **SUPABASE_ANON_KEY**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (long string)

---

## 🚀 Next Step: Add to Vercel

Once you have both values:

1. Go to your Vercel project
2. Go to **Settings** → **Environment Variables**
3. Add these two variables:

   **Variable 1:**
   - Name: `SUPABASE_URL`
   - Value: `https://vplfrzjnbfkzaafynivq.supabase.co` (your Project URL)
   - Environment: Production, Preview, Development (select all)

   **Variable 2:**
   - Name: `SUPABASE_ANON_KEY`
   - Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (your anon key)
   - Environment: Production, Preview, Development (select all)

4. Click **Save**
5. Redeploy your app!

---

## ❓ Still Can't Find It?

If you can't find the API settings:

1. Make sure you're logged into Supabase
2. Make sure you're in the correct project
3. The left sidebar should have: Home, Table Editor, SQL Editor, Authentication, Storage, Edge Functions, Database, Settings
4. Click **Settings** → **API**

---

## 🔒 Security Note

- ✅ The **anon public** key is safe to use in frontend code and Vercel
- ❌ The **service_role** key is secret - never expose it!
- ❌ The **database password** in your connection string is secret - never expose it!

You're using the right one (anon public) for this app! 👍

