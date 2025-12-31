# ✅ What's Next? - Step-by-Step Checklist

You've set up Supabase! Now let's deploy to Vercel. Follow these steps in order:

---

## ✅ Step 1: Verify You Have Your Credentials

Make sure you have these two values from Supabase:

- [ ] **SUPABASE_URL**: `https://vplfrzjnbfkzaafynivq.supabase.co` (or your project URL)
- [ ] **SUPABASE_ANON_KEY**: Long JWT token (from Settings → API → anon public)

**Don't have them?** → Check [GET_CREDENTIALS.md](./GET_CREDENTIALS.md)

---

## ✅ Step 2: Push Your Code to GitHub

### 2.1 Initialize Git (if not already done)

Open terminal in your project folder and run:

```bash
git init
git add .
git commit -m "Ready for Vercel deployment"
```

### 2.2 Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon (top right) → **"New repository"**
3. Name it: `newyear-plans` (or any name you like)
4. Make it **Public** or **Private** (your choice)
5. **DON'T** check "Initialize with README" (you already have files)
6. Click **"Create repository"**

### 2.3 Push Your Code

GitHub will show you commands. Run these in your terminal:

```bash
git remote add origin https://github.com/YOUR-USERNAME/newyear-plans.git
git branch -M main
git push -u origin main
```

(Replace `YOUR-USERNAME` with your GitHub username)

**Done?** ✅ Your code is now on GitHub!

---

## ✅ Step 3: Deploy to Vercel

### 3.1 Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Sign up with **GitHub** (easiest - one click!)

### 3.2 Import Your Project

1. After logging in, click **"Add New..."** → **"Project"**
2. You'll see your GitHub repositories
3. Find `newyear-plans` (or whatever you named it)
4. Click **"Import"**

### 3.3 Configure Project Settings

Vercel will auto-detect your settings. You should see:

- **Framework Preset**: Vite (or auto-detected)
- **Root Directory**: `./frontend` (or leave as is)
- **Build Command**: `npm run build` (should auto-fill)
- **Output Directory**: `dist` (should auto-fill)

**If it doesn't auto-detect**, manually set:
- **Root Directory**: `frontend`
- **Build Command**: `cd frontend && npm install && npm run build`
- **Output Directory**: `frontend/dist`

### 3.4 Add Environment Variables (IMPORTANT!)

**Before clicking Deploy**, you MUST add environment variables:

1. In the project import screen, look for **"Environment Variables"** section
2. Click to expand it
3. Add **Variable 1**:
   - **Name**: `SUPABASE_URL`
   - **Value**: `https://vplfrzjnbfkzaafynivq.supabase.co` (your Supabase URL)
   - **Environment**: Check all three (Production, Preview, Development)
4. Add **Variable 2**:
   - **Name**: `SUPABASE_ANON_KEY`
   - **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (your anon key)
   - **Environment**: Check all three (Production, Preview, Development)
5. Click **"Add"** for each variable

### 3.5 Deploy!

1. Click the big **"Deploy"** button
2. ⏳ Wait 2-3 minutes while Vercel builds your app
3. You'll see a progress bar - just wait!

---

## ✅ Step 4: Test Your Deployment

### 4.1 Get Your Live URL

Once deployment finishes:
- You'll see a **"Congratulations"** message
- Your app URL will be: `https://your-app-name.vercel.app`
- Click **"Visit"** to open it!

### 4.2 Test the Form

1. Fill out the form with a test submission
2. Submit it
3. Check if you see the success message

### 4.3 Verify Data in Supabase

1. Go back to Supabase dashboard
2. Click **"Table Editor"** → **"submissions"**
3. You should see your test submission! ✅

### 4.4 Test the View Page

1. Go to: `https://your-app-name.vercel.app/view`
2. Enter password: `ktk2024`
3. You should see all submissions!

---

## ✅ Step 5: Share Your App! 🎉

Your app is now live! Share the URL with your friends:
- `https://your-app-name.vercel.app`

---

## ❌ Troubleshooting

### Build Failed?

**Check:**
- Did you add both environment variables?
- Are the variable names exactly: `SUPABASE_URL` and `SUPABASE_ANON_KEY`?
- Check Vercel deployment logs for errors

### API Not Working?

**Check:**
- Go to Vercel → Your Project → Settings → Environment Variables
- Make sure both variables are there
- Make sure they're added to Production, Preview, AND Development
- Redeploy after adding variables

### Can't See Submissions?

**Check:**
- Did you run the SQL script in Supabase? (from `supabase-setup.sql`)
- Go to Supabase → Table Editor → submissions
- Is the table there?

### Still Stuck?

1. Check Vercel deployment logs (click on the deployment → "Functions" tab)
2. Check browser console for errors (F12 → Console)
3. Ask me! I'll help debug! 🚀

---

## 🎯 Quick Checklist Summary

- [ ] Got Supabase credentials (URL + anon key)
- [ ] Pushed code to GitHub
- [ ] Created Vercel account
- [ ] Imported project to Vercel
- [ ] Added environment variables (SUPABASE_URL + SUPABASE_ANON_KEY)
- [ ] Deployed!
- [ ] Tested the form
- [ ] Verified data in Supabase
- [ ] Tested view page
- [ ] Shared with friends! 🎉

---

**You're almost there! Start with Step 2 (GitHub) if you haven't done it yet!** 🚀

