# 🔧 Troubleshooting - API Not Working

If you're seeing "Oops! Something went wrong" or "Failed to load submissions", follow these steps:

---

## ✅ Step 1: Check Environment Variables in Vercel

**This is the #1 cause of API failures!**

1. Go to your Vercel project dashboard
2. Click **"Settings"** tab
3. Click **"Environment Variables"** (left sidebar)
4. Verify you have **BOTH** of these:

   - ✅ `SUPABASE_URL` = `https://vplfrzjnbfkzaafynivq.supabase.co`
   - ✅ `SUPABASE_ANON_KEY` = (your anon key)

5. **IMPORTANT**: Make sure they're added to:
   - ✅ Production
   - ✅ Preview  
   - ✅ Development

6. **If missing or wrong**: Add/update them, then **Redeploy**!

---

## ✅ Step 2: Verify Your API Key

The key you provided (`sb_publishable_...`) might not be the right one.

### Get the Correct anon public Key:

1. Go to Supabase dashboard
2. Click **Settings** → **API**
3. Find **"anon public"** key (NOT "service_role")
4. It should start with `eyJ...` (long JWT token)
5. Copy it
6. Update in Vercel: Settings → Environment Variables → `SUPABASE_ANON_KEY`
7. **Redeploy**

---

## ✅ Step 3: Check Vercel Function Logs

1. Go to Vercel → Your Project → **Deployments**
2. Click on the latest deployment
3. Click **"Functions"** tab
4. Click on `/api/submissions`
5. Check the logs for errors

**Common errors:**
- `Supabase credentials not configured` → Environment variables missing
- `Invalid API key` → Wrong API key
- `relation "submissions" does not exist` → Table not created in Supabase

---

## ✅ Step 4: Verify Supabase Table Exists

1. Go to Supabase dashboard
2. Click **"Table Editor"** (left sidebar)
3. You should see a table called **"submissions"**
4. **If missing**: Run the SQL from `supabase-setup.sql` in SQL Editor

---

## ✅ Step 5: Test the API Directly

Open your browser console (F12) and check:

1. **Network Tab**: Look for `/api/submissions` request
2. **Check the response**: What error does it show?
3. **Console Tab**: Any error messages?

---

## ✅ Step 6: Check Browser Console

1. Open your live app
2. Press **F12** (open DevTools)
3. Go to **Console** tab
4. Try submitting the form
5. Look for error messages

**Common errors you might see:**
- `Network Error` → API route not found
- `500 Internal Server Error` → Backend error (check Vercel logs)
- `401 Unauthorized` → Wrong API key
- `404 Not Found` → API route doesn't exist

---

## 🔍 Quick Diagnostic Checklist

- [ ] Environment variables set in Vercel?
- [ ] Variables added to Production, Preview, AND Development?
- [ ] Using the correct "anon public" key (starts with `eyJ...`)?
- [ ] Supabase table `submissions` exists?
- [ ] Redeployed after adding/updating environment variables?
- [ ] Checked Vercel function logs?
- [ ] Checked browser console for errors?

---

## 🆘 Still Not Working?

### Check These:

1. **Vercel Function Logs**:
   - Deployments → Latest → Functions → `/api/submissions` → Logs
   - Look for error messages

2. **Supabase Dashboard**:
   - Settings → API → Check your Project URL and keys
   - Table Editor → Verify `submissions` table exists

3. **Network Tab**:
   - Open DevTools (F12) → Network tab
   - Submit form
   - Click on `/api/submissions` request
   - Check Response tab for error details

---

## 💡 Most Common Fix

**90% of issues are fixed by:**
1. Adding environment variables in Vercel
2. Using the correct "anon public" key (not publishable key)
3. Redeploying after adding variables

---

## 📝 Need More Help?

Share:
1. Error message from browser console
2. Error from Vercel function logs
3. Screenshot of your Vercel environment variables (hide the values!)

**You'll get it working!** 🚀

