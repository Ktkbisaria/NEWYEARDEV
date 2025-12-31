# ⚡ QUICK FIX - API Not Working

## The Problem
Your app is deployed but getting "Oops! Something went wrong" when submitting.

## ✅ Solution (3 Steps)

### Step 1: Check Vercel Environment Variables

1. Go to **Vercel** → Your Project → **Settings** → **Environment Variables**

2. **You MUST have these two variables:**
   - ✅ `SUPABASE_URL` = `https://vplfrzjnbfkzaafynivq.supabase.co`
   - ✅ `SUPABASE_ANON_KEY` = (your API key)

3. **Check ALL environments:**
   - ✅ Production
   - ✅ Preview
   - ✅ Development

4. **If missing**: Add them and click Save

---

### Step 2: Get the Correct API Key

In your Supabase screenshot, you see "Publishable API Key". You need to find the **"anon public"** key:

1. In Supabase → **Settings** → **API**
2. **Scroll down** to find **"Project API keys"** section
3. Look for **"anon public"** (NOT "service_role")
4. It should look like: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (long JWT token)
5. **Copy this key**

**If you only see "Publishable API Key"**:
- The publishable key might work, but try to find "anon public" below
- Or the publishable key IS the anon key in newer Supabase versions

---

### Step 3: Update and Redeploy

1. **Update** `SUPABASE_ANON_KEY` in Vercel with the correct key
2. Go to **Deployments** → Click **"..."** → **"Redeploy"**
3. Wait for deployment to finish
4. **Test again!**

---

## 🔍 How to Verify It's Fixed

1. **Check Vercel Logs**:
   - Deployments → Latest → Functions → `/api/submissions` → Logs
   - Should see: "Supabase URL: https://..." and "Supabase Key exists: Yes"

2. **Test the Form**:
   - Submit a test entry
   - Should see success message ✅

3. **Check Supabase**:
   - Table Editor → submissions
   - Your test entry should be there!

---

## ⚠️ Common Mistakes

- ❌ Using "service_role" key (secret - wrong one!)
- ❌ Not adding variables to all 3 environments
- ❌ Forgetting to redeploy after adding variables
- ❌ Using wrong variable names (must be exact: `SUPABASE_URL` and `SUPABASE_ANON_KEY`)

---

## 🆘 Still Not Working?

1. **Check Vercel Function Logs** (most important!)
   - You'll see the exact error there
2. **Check browser console** (F12)
   - Look for network errors
3. **Verify Supabase table exists**
   - Table Editor → Should see "submissions" table

**The logs will tell you exactly what's wrong!** 🔍

