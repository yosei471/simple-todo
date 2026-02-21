import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oyyijrximdpioqlwhzwk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95eWlqcnhpbWRwaW9xbHdoendrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2NjA1OTIsImV4cCI6MjA4NzIzNjU5Mn0.JCanA16RyLzkZx7WEhWlSbjFYFUa4UF7S0mB7AYLQQo'

export const supabase = createClient(supabaseUrl, supabaseKey)