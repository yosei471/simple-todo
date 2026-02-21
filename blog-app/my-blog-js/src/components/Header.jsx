import React from 'react'
import { supabase } from '../supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Header({ user }) {
  const navigate = useNavigate()

  const login = async () => {
    // テスト用の固定メール・パスワード
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'your-email@example.com', // ここに自分のユーザー
      password: 'your-password'
    })

    if (error) {
      alert('ログイン失敗: ' + error.message)
    } else {
      alert('ログイン成功! ' + data.user.email)
    }
  }

  const logout = async () => {
    await supabase.auth.signOut()
    alert('ログアウトしました')
  }

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#001F54',
      color: '#fff',
      padding: '12px 24px'
    }}>
      <h1 style={{ color: '#FF7A59', margin: 0, cursor: 'pointer' }} onClick={() => navigate('/')}>MY BLOG</h1>
      <div>
        {user ? (
          <button onClick={logout} style={{ backgroundColor: '#FF4B4B', color: '#fff', marginLeft: '8px' }}>ログアウト</button>
        ) : (
          <button onClick={login} style={{ backgroundColor: '#0070F3', color: '#fff', marginLeft: '8px' }}>ログイン</button>
        )}
        <button onClick={() => navigate('/post')} style={{ backgroundColor: '#0070F3', color: '#fff', marginLeft: '8px' }}>投稿する</button>
      </div>
    </header>
  )
}