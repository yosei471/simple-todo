import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

import { supabase } from './supabaseClient'

const login = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'あなたのメール',
    password: 'あなたのパスワード'
  })

  if (error) console.error('ログイン失敗:', error)
  else console.log('ログイン成功:', data.user)
}

const createPost = async () => {
  const { data: user } = await supabase.auth.getUser()

  const { data, error } = await supabase
    .from('posts')
    .insert([
      {
        title: 'テスト記事',
        content: 'ブログ投稿テスト',
        type: 'tech',
        user_id: user.user.id
      }
    ])

  if (error) console.error(error)
  else console.log('投稿成功:', data)
}


