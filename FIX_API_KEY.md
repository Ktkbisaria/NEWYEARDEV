# 🔑 Fix API Key Issue - Step by Step

Based on your Supabase screenshot, here's how to fix it:

## ✅ Step 1: Find the "anon public" Key

In your Supabase dashboard (the page you're looking at):

1. **Scroll down** on that same page (Settings → API)
2. Look for a section called **"Project API keys"** or **"API Keys"**
3. You should see:
   - **anon public** (this is what you need!)
   - **service_role** (secret - don't use this)

4. The **anon public** key will look like:
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwbGZyempuYmZremFhYWZ5bml2cSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjk5OTk5OTk5LCJleHAiOjIwMTU1NzU5OTl9.xxxxx
   ```
   (Long JWT token starting with `eyJ...`)

5. **Copy the anon public key**

---

## ✅ Step 2: Update Vercel Environment Variables

1. Go to **Vercel** → Your Project → **Settings** → **Environment Variables**

2. **Update or Add**:
   - **Name**: `SUPABASE_ANON_KEY`
   - **Value**: Paste the **anon public** key (the long `eyJ...` one, NOT the `sb_publishable_...` one)
   - **Environment**: Check all 3 (Production, Preview, Development)

3. **Verify**:
   - `SUPABASE_URL` = `https://vplfrzjnbfkzaafynivq.supabase.co`
   - `SUPABASE_ANON_KEY` = (the anon public key with `eyJ...`)

4. Click **Save**

---

## ✅ Step 3: Redeploy

1. Go to **Deployments** tab
2. Click **"..."** on the latest deployment
3. Click **"Redeploy"**
4. Wait for it to finish

---

## ✅ Step 4: Test Again

1. Go to your live app
2. Fill out the form
3. Submit it
4. Should work now! ✅

---

## 🔍 If You Can't Find "anon public" Key

If you only see "Publishable API Key" and no "anon public":

1. The publishable key might work, but try this:
2. Go to Supabase → **Settings** → **API**
3. Look for **"Project API keys"** section (might be below)
4. Or try clicking the link that says "secret key which can be found here" - that page might show all keys

---

## ⚠️ Important

- Use **anon public** key (starts with `eyJ...`)
- NOT the **service_role** key (that's secret!)
- The **publishable** key might work, but **anon public** is the standard

---

**After updating and redeploying, it should work!** 🚀

