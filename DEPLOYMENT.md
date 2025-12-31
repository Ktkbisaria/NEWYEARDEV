# 🚀 Vercel Deployment Guide

This guide will help you deploy your New Year Plans app to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com) (free)
2. A [Supabase account](https://supabase.com) (free tier available)

## Step 1: Set Up Supabase Database

> 🎯 **Never used Supabase before?** No worries! I've created a super detailed beginner guide just for you!
> 
> **👉 Start here: [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)**
> 
> It walks you through everything step-by-step with screenshots descriptions. Come back here once you've completed it!

### Quick Summary (if you're already familiar):

1. **Create Supabase Project**:
   - Go to [supabase.com](https://supabase.com) and sign up
   - Create a new project named `newyear-plans`
   - Choose a strong database password
   - Wait ~2 minutes for setup

2. **Create Database Table**:
   - Go to **SQL Editor** → **New Query**
   - Copy the SQL from `supabase-setup.sql` file
   - Click **Run**

3. **Get Your Credentials**:
   - Go to **Settings** → **API**
   - Copy **Project URL** and **anon public** key
   - Save these - you'll need them for Vercel!

## Step 2: Prepare Your Code

Your code is already set up! The important files are:
- `api/submissions.js` - Serverless function for API
- `vercel.json` - Vercel configuration
- `frontend/` - Your React app

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect settings

3. **Configure Environment Variables**:
   - In Vercel project settings, go to **Settings** → **Environment Variables**
   - Add these two variables:
     - **Name**: `SUPABASE_URL`
       **Value**: Your Supabase Project URL
     - **Name**: `SUPABASE_ANON_KEY`
       **Value**: Your Supabase anon public key

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Add Environment Variables**:
   ```bash
   vercel env add SUPABASE_URL
   # Paste your Supabase URL when prompted
   
   vercel env add SUPABASE_ANON_KEY
   # Paste your Supabase anon key when prompted
   ```

5. **Redeploy**:
   ```bash
   vercel --prod
   ```

## Step 4: Verify Deployment

1. Visit your Vercel deployment URL (e.g., `https://your-app.vercel.app`)
2. Test the form submission
3. Check the view page (with password: `ktk2024`)
4. Verify data in Supabase:
   - Go to Supabase → **Table Editor** → `submissions`
   - You should see your test submission

## Troubleshooting

### API Returns 500 Error
- Check that environment variables are set correctly in Vercel
- Verify Supabase table was created properly
- Check Vercel function logs: **Deployments** → Click deployment → **Functions** tab

### Frontend Can't Connect to API
- Ensure `vercel.json` rewrites are correct
- Check browser console for CORS errors
- Verify API route is `/api/submissions`

### Database Connection Issues
- Double-check `SUPABASE_URL` and `SUPABASE_ANON_KEY` in Vercel
- Verify RLS policies allow public access (if using RLS)
- Check Supabase project is active (not paused)

## Local Development After Deployment

Your local dev still uses the old Express server. To test with Supabase locally:

1. Create a `.env.local` file in the root:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

2. Update `api/submissions.js` to read from `process.env` (already done!)

3. Run `vercel dev` instead of `npm run dev` to test serverless functions locally

## Cost

- **Vercel**: Free tier includes 100GB bandwidth/month
- **Supabase**: Free tier includes 500MB database, 2GB bandwidth
- Both are sufficient for a small app like this! 🎉

## Need Help?

- [Vercel Docs](https://vercel.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- Check Vercel deployment logs for errors

Happy deploying! 🚀

