// Diagnostic endpoint to test Vercel function and environment variables
export default async function handler(req, res) {
  const envVars = {
    SUPABASE_URL: process.env.SUPABASE_URL ? '✅ Set' : '❌ Missing',
    EXPO_PUBLIC_SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ Missing',
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing',
    EXPO_PUBLIC_SUPABASE_KEY: process.env.EXPO_PUBLIC_SUPABASE_KEY ? '✅ Set' : '❌ Missing',
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.EXPO_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.EXPO_PUBLIC_SUPABASE_KEY

  res.status(200).json({
    message: 'Vercel function is working!',
    environment: process.env.NODE_ENV || 'unknown',
    envVars,
    supabaseUrl: supabaseUrl ? '✅ Found' : '❌ Missing',
    supabaseKey: supabaseKey ? `✅ Found (${supabaseKey.length} chars)` : '❌ Missing',
    timestamp: new Date().toISOString()
  })
}

