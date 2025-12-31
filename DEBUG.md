# 🔍 Debug Vercel Error

## Step 1: Check Vercel Function Logs

1. Go to **Vercel** → Your Project → **Deployments**
2. Click on the **latest deployment**
3. Click **"Functions"** tab
4. Click on **`/api/submissions`**
5. Look at the **logs** - what error do you see?

**Common errors you might see:**
- `Missing SUPABASE_URL` → Environment variables not set
- `Could not find the table 'public.submissions'` → Table doesn't exist in Supabase
- `Invalid API key` → Wrong key
- `Function not found` → API route issue

---

## Step 2: Test Diagnostic Endpoint

After redeploying, visit:
- `https://your-app.vercel.app/api/test`

This will show you:
- ✅ Which environment variables are set
- ✅ If Supabase URL/key are found
- ✅ If the function is working

---

## Step 3: Verify Environment Variables

1. **Vercel** → **Settings** → **Environment Variables**
2. Make sure you have:
   - `EXPO_PUBLIC_SUPABASE_URL` = `https://vplfrzjnbfkzaafynivq.supabase.co`
   - `EXPO_PUBLIC_SUPABASE_KEY` = `sb_publishable_wp7T5skCFupUYs1cGrvfQw_IncSZsql`
3. **Check all 3 environments**: Production, Preview, Development
4. **Redeploy** after adding/updating

---

## Step 4: Verify Supabase Table

1. Go to **Supabase** → **Table Editor**
2. Do you see a table called **`submissions`**?
3. **If NO**: Run the SQL from `supabase-setup.sql` in SQL Editor

---

## Step 5: Check Browser Console

1. Open your live app
2. Press **F12** (DevTools)
3. Go to **Console** tab
4. Try submitting the form
5. What error do you see?

---

## Most Common Issues:

1. **Table doesn't exist** → Create it in Supabase
2. **Environment variables not set** → Add them in Vercel
3. **Wrong variable names** → Use `EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_KEY`
4. **Didn't redeploy** → Redeploy after adding variables

**Check the logs first - they'll tell you exactly what's wrong!** 🔍

