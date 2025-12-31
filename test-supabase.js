// Quick test to verify Supabase connection
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://vplfrzjnbfkzaafynivq.supabase.co'
const SUPABASE_KEY = 'sb_publishable_wp7T5skCFupUYs1cGrvfQw_IncSZsql'

console.log('🔍 Testing Supabase Connection...\n')
console.log('URL:', SUPABASE_URL)
console.log('Key:', SUPABASE_KEY.substring(0, 20) + '...\n')

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

async function testConnection() {
  try {
    console.log('1. Testing connection...')
    
    // Test 1: Check if we can query the table
    console.log('2. Testing table access...')
    const { data, error } = await supabase
      .from('submissions')
      .select('*')
      .limit(1)
    
    if (error) {
      console.error('❌ ERROR:', error.message)
      console.error('   Code:', error.code)
      console.error('   Details:', error.details)
      console.error('   Hint:', error.hint)
      
      if (error.code === 'PGRST301') {
        console.log('\n⚠️  Table "submissions" might not exist!')
        console.log('   Run the SQL from supabase-setup.sql in Supabase SQL Editor')
      }
      
      if (error.code === 'PGRST116') {
        console.log('\n⚠️  Row Level Security (RLS) might be blocking access!')
        console.log('   Check your RLS policies in Supabase')
      }
      
      return false
    }
    
    console.log('✅ Connection successful!')
    console.log('✅ Table access working!')
    console.log('✅ Found', data?.length || 0, 'submissions\n')
    
    // Test 2: Try to insert a test record
    console.log('3. Testing insert...')
    const { data: insertData, error: insertError } = await supabase
      .from('submissions')
      .insert([
        {
          name: 'Test User',
          plan: 'Testing connection',
          rating: 5,
          creative_response: '🧪'
        }
      ])
      .select()
    
    if (insertError) {
      console.error('❌ Insert failed:', insertError.message)
      return false
    }
    
    console.log('✅ Insert successful!')
    console.log('   Created ID:', insertData[0].id)
    
    // Clean up test record
    await supabase
      .from('submissions')
      .delete()
      .eq('id', insertData[0].id)
    
    console.log('✅ Test record cleaned up\n')
    console.log('🎉 ALL TESTS PASSED! Your Supabase setup is correct!')
    return true
    
  } catch (err) {
    console.error('❌ Unexpected error:', err.message)
    return false
  }
}

testConnection().then(success => {
  process.exit(success ? 0 : 1)
})

