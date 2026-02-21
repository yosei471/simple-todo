// src/App.jsx
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import PostFormPage from './pages/PostFormPage.jsx'
import { supabase } from './supabaseClient'
import Header from './components/Header.jsx'

export default function App() {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])

  // 初回ロードで認証ユーザー取得 & 投稿一覧取得
  useEffect(() => {
    // 認証ユーザー取得
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null)
    })

    // 認証状態変化を監視
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    // 投稿一覧取得
    const fetchPosts = async () => {
      const { data } = await supabase
        .from('posts')
        .select('*')
        .order('id', { ascending: false })
      if (data) setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <Router>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<HomePage user={user} posts={posts} setPosts={setPosts} />} />
        <Route path="/post" element={<PostFormPage user={user} setPosts={setPosts} />} />
      </Routes>
    </Router>
  )
}