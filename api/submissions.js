import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  // Support both naming conventions (SUPABASE_URL and EXPO_PUBLIC_SUPABASE_URL)
  const supabaseUrl = process.env.SUPABASE_URL || process.env.EXPO_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.EXPO_PUBLIC_SUPABASE_KEY

  // Better error messages
  if (!supabaseUrl) {
    console.error('Missing SUPABASE_URL or EXPO_PUBLIC_SUPABASE_URL environment variable')
    return res.status(500).json({ 
      error: 'Supabase URL not configured. Please add SUPABASE_URL (or EXPO_PUBLIC_SUPABASE_URL) in Vercel environment variables.' 
    })
  }

  if (!supabaseKey) {
    console.error('Missing SUPABASE_ANON_KEY or EXPO_PUBLIC_SUPABASE_KEY environment variable')
    return res.status(500).json({ 
      error: 'Supabase API key not configured. Please add SUPABASE_ANON_KEY (or EXPO_PUBLIC_SUPABASE_KEY) in Vercel environment variables.' 
    })
  }

  console.log('Supabase URL:', supabaseUrl)
  console.log('Supabase Key exists:', supabaseKey ? 'Yes' : 'No')
  console.log('Supabase Key length:', supabaseKey?.length)

  const supabase = createClient(supabaseUrl, supabaseKey)

  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from('submissions')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Supabase error fetching:', error)
        throw error
      }

      res.status(200).json(data || [])
    } catch (error) {
      console.error('Error fetching submissions:', error)
      console.error('Error details:', {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint
      })
      res.status(500).json({ 
        error: error.message || 'Failed to fetch submissions',
        details: error.details || error.hint || 'Check Vercel function logs for more details'
      })
    }
  } else if (req.method === 'POST') {
    try {
      const { name, plan, rating, creative_response } = req.body

      if (!name || !plan || rating === undefined) {
        return res.status(400).json({ error: 'Missing required fields' })
      }

      const { data, error } = await supabase
        .from('submissions')
        .insert([
          {
            name,
            plan,
            rating,
            creative_response: creative_response || '',
          },
        ])
        .select()

      if (error) {
        console.error('Supabase error creating:', error)
        throw error
      }

      res.status(200).json({ id: data[0].id, message: 'Submission saved successfully!' })
    } catch (error) {
      console.error('Error creating submission:', error)
      console.error('Error details:', {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint
      })
      res.status(500).json({ 
        error: error.message || 'Failed to create submission',
        details: error.details || error.hint || 'Check Vercel function logs for more details'
      })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
