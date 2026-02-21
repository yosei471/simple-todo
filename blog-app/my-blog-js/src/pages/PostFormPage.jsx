// import React, { useState } from 'react'
// import PostForm from '../components/PostForm.jsx'
// import { useNavigate } from 'react-router-dom'

// export default function PostFormPage({ user, setPosts }) {
//   const navigate = useNavigate()

//    if (!user) {
//     return <p>ログインしてください</p> // まだ取得できていない場合
//   }

//   return (
//     <div style={{padding:'24px', width:'100%'}}>
//       <h1 style={{marginBottom:'16px'}}>新規投稿</h1>
//       <PostForm user={user} onPostCreated={(newPost) => {
//         setPosts(prev => [newPost, ...prev])
//         navigate('/') // 投稿後にTOPへ戻る
//       }} />
//     </div>
//   )
// }

// src/pages/PostFormPage.jsx
import React from 'react'
import PostForm from '../components/PostForm.jsx'
import { useNavigate } from 'react-router-dom'

export default function PostFormPage({ user, setPosts }) {
  const navigate = useNavigate()

  return (
    <div style={{ padding: '24px', width: '100%' }}>
      <h1 style={{ marginBottom: '16px' }}>新規投稿</h1>
      <PostForm user={user} onPostCreated={(newPost) => {
        setPosts(prev => [newPost, ...prev])
        navigate('/') // 投稿後TOPへ戻る
      }} />
    </div>
  )
}