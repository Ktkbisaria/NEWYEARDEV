# 🎉 New Year Plans Collection App

A beautiful web application to collect your friends' New Year plans! Created by ktk.

## ✨ Features

- Beautiful, modern UI with animations
- Multi-page form flow (name → plan → rating → message)
- Password-protected admin view
- Data stored in Supabase
- No login/signup required

## 🚀 Quick Start

### Local Development

```bash
npm run install-all
npm run dev
```

Visit: `http://localhost:3000`

### Deploy to Vercel

1. Push code to GitHub
2. Import to Vercel
3. Add environment variables (see SETUP.md)
4. Create Supabase table (see SETUP.md)
5. Deploy!

## 📁 Project Structure

```
newyear/
├── api/              # Vercel serverless functions
├── backend/          # Local Express server (dev only)
├── frontend/         # React app
└── vercel.json       # Vercel config
```

## 🔧 Setup

See [SETUP.md](./SETUP.md) for Supabase table setup and Vercel configuration.

## 🎯 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Vercel Serverless Functions
- **Database**: Supabase (PostgreSQL)

Enjoy collecting your friends' New Year plans! 🎊
