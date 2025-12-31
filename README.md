# 🎉 New Year Plans Collection App

A beautiful web application to collect your friends' New Year plans! Created by ktk.

## Features

- ✨ Beautiful, modern UI with animations
- 📝 Multi-page form flow:
  1. Name entry with "Happy New Year from ktk!" greeting
  2. Detailed plan submission
  3. Plan rating (1-5 stars)
  4. Creative message/emoji selection
  5. Success confirmation
- 💾 Data storage (SQLite locally, Supabase for production)
- 🔒 Password-protected admin view
- 🚀 No login/signup required - simple and fast!

## Setup Instructions

### 1. Install Dependencies

Run this command in the root directory:

```bash
npm run install-all
```

Or install manually:

```bash
# Root dependencies
npm install

# Backend dependencies
cd backend
npm install

# Frontend dependencies
cd ../frontend
npm install
```

### 2. Run the Application

From the root directory, run:

```bash
npm run dev
```

This will start both:
- Backend server on `http://localhost:3001`
- Frontend app on `http://localhost:3000`

### 3. Access the App

Open your browser and go to: `http://localhost:3000`

## Project Structure

```
newyear/
├── backend/
│   ├── server.js          # Express server
│   ├── package.json
│   └── submissions.db     # SQLite database (created automatically)
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── package.json           # Root package.json
```

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: 
  - Local: Node.js, Express
  - Production: Vercel Serverless Functions
- **Database**: 
  - Local: SQLite (better-sqlite3)
  - Production: Supabase (PostgreSQL)

## API Endpoints

- `GET /api/submissions` - Get all submissions
- `POST /api/submissions` - Submit a new response

## 📊 Accessing the Data

### Method 1: View All Submissions (Web Interface)
- Click the **"📋 View All Responses"** button in the top-right corner of the main page
- Or navigate directly to: `http://localhost:3000/view`
- This shows all submissions in a beautiful, organized format

### Method 2: Database File
- All data is stored in: `backend/submissions.db`
- This is a SQLite database file that you can:
  - Open with any SQLite browser (like DB Browser for SQLite)
  - Query directly using SQL commands
  - Export to CSV/JSON if needed

### Method 3: API Endpoint
- Access via: `http://localhost:3001/api/submissions`
- Returns JSON data with all submissions
- You can use this in Postman, curl, or any HTTP client

### Database Schema
The `submissions` table contains:
- `id` - Unique identifier
- `name` - Friend's name
- `plan` - Detailed New Year plan
- `rating` - Rating (1-5 stars)
- `creative_response` - Creative message/emoji
- `created_at` - Timestamp of submission

## 🚀 Deployment to Vercel

This app is ready to deploy on Vercel!

### 🎯 First Time? Start Here!

**👉 [QUICK_START.md](./QUICK_START.md)** - Complete beginner guide with step-by-step instructions!

### 📚 Detailed Guides

- **Never used Supabase?** → **[SUPABASE_SETUP.md](./SUPABASE_SETUP.md)** - Super detailed beginner guide!
- **Ready to deploy?** → **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Full deployment instructions

### ⚡ Quick Summary (if you're experienced):

1. Create a free Supabase project
2. Run the SQL script from `supabase-setup.sql` in Supabase SQL Editor
3. Push code to GitHub
4. Import to Vercel and add environment variables (`SUPABASE_URL` and `SUPABASE_ANON_KEY`)
5. Deploy! 🎉

**Note:** The app uses SQLite for local development and Supabase for production deployment. Both work seamlessly!

Enjoy collecting your friends' New Year plans! 🎊

