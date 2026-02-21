import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ucnwasyewowgfyhzduyz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjbndhc3lld293Z2Z5aHpkdXl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1ODg3MDAsImV4cCI6MjA4NzE2NDcwMH0.5iQDNa6_GM9uUwFkya5ZQdUlQLEFumqkMWcXyutbk1I'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)