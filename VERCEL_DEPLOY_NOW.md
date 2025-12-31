# 🚀 Deploy to Vercel - Your Credentials Ready!

Your code is on GitHub: `https://github.com/Ktkbisaria/NEWYEARDEV`

Now deploy to Vercel with these steps:

---

## ✅ Step 1: Go to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login (use GitHub - easiest!)
3. Click **"Add New..."** → **"Project"**

---

## ✅ Step 2: Import Your Repository

1. You'll see your GitHub repos
2. Find **"NEWYEARDEV"**
3. Click **"Import"**

---

## ✅ Step 3: Configure Project Settings

Vercel should auto-detect, but if not, set:

- **Framework Preset**: Vite
- **Root Directory**: `./frontend` (or leave blank)
- **Build Command**: `npm install && npm run build`
- **Output Directory**: `dist`

**OR** manually set:
- **Root Directory**: `frontend`
- **Build Command**: `cd frontend && npm install && npm run build`
- **Output Directory**: `frontend/dist`

---

## ✅ Step 4: Add Environment Variables (CRITICAL!)

**BEFORE clicking Deploy**, add these environment variables:

### Variable 1:
- **Name**: `SUPABASE_URL`
- **Value**: `https://vplfrzjnbfkzaafynivq.supabase.co`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development (check all 3)

### Variable 2:
- **Name**: `SUPABASE_ANON_KEY`
- **Value**: `sb_publishable_wp7T5skCFupUYs1cGrvfQw_IncSZsql`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development (check all 3)

⚠️ **IMPORTANT**: Make sure you add BOTH variables and check ALL three environments!

---

## ✅ Step 5: Deploy!

1. Click the big **"Deploy"** button
2. ⏳ Wait 2-3 minutes
3. You'll see your live URL: `https://newyeardev.vercel.app` (or similar)

---

## ✅ Step 6: Test It!

1. Visit your live URL
2. Fill out the form
3. Submit it
4. Go to `/view` and enter password: `ktk2024`
5. You should see your submission!

---

## 🔍 Verify in Supabase

1. Go to Supabase dashboard
2. **Table Editor** → **submissions**
3. You should see your test data!

---

## ❌ If Something Goes Wrong

### Build Fails?
- Check that both environment variables are added
- Check Vercel logs (click on deployment → "Functions" tab)

### API Not Working?
- Verify environment variables in Vercel Settings
- Make sure you ran the SQL script in Supabase (from `supabase-setup.sql`)

### Can't See Data?
- Check Supabase Table Editor - is the `submissions` table there?
- Check browser console (F12) for errors

---

## 🎉 You're Done!

Your app is live! Share it with friends:
- `https://your-app-name.vercel.app`

---

**Your Credentials Summary:**
- **Supabase URL**: `https://vplfrzjnbfkzaafynivq.supabase.co`
- **Supabase Key**: `sb_publishable_wp7T5skCFupUYs1cGrvfQw_IncSZsql`
- **GitHub Repo**: `https://github.com/Ktkbisaria/NEWYEARDEV`

**Next**: Go to Vercel and import your repo! 🚀

