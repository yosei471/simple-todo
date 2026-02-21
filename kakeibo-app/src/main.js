import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// createApp(App).mount('#app')


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ucnwasyewowgfyhzduyz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjbndhc3lld293Z2Z5aHpkdXl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1ODg3MDAsImV4cCI6MjA4NzE2NDcwMH0.5iQDNa6_GM9uUwFkya5ZQdUlQLEFumqkMWcXyutbk1I'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

await supabase.auth.signInWithPassword({
  email,
  password,
})

await supabase.auth.signUp({
  email,
  password,
})

await supabase.from('transactions').insert({
  user_id: user.id,
  type: 'expense',
  category: '食費',
  amount: 1200,
  memo: 'ランチ',
  date: '2026-02-20'
})

const { data } = await supabase
  .from('transactions')
  .select('*')
  .order('date', { ascending: false })

  const total = data
  .filter(item => item.type === 'expense')
  .reduce((sum, item) => sum + item.amount, 0)