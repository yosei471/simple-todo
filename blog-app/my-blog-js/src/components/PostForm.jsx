// import React, { useState } from 'react'
// import { supabase } from '../supabaseClient'

// export default function PostForm({ user, onPostCreated }) {
//   const [title, setTitle] = useState('')
//   const [content, setContent] = useState('')

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     // 投稿時だけログインチェック
//     if (!user) {
//       alert('投稿するにはログインしてください')
//       return
//     }

//     try {
//       const { data, error } = await supabase
//         .from('posts')
//         .insert([{ title, content, user_id: user.id }])
//         .select()

//       if (error) throw error

//       onPostCreated(data[0]) // 親コンポーネントに投稿を渡す
//       setTitle('')
//       setContent('')
//     } catch (err) {
//       console.error(err)
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit} style={{ marginBottom: '24px' }}>
//       <input
//         type="text"
//         placeholder="タイトル"
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//         style={{ width: '100%', padding: '8px', marginBottom: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//       />
//       <textarea
//         placeholder="内容"
//         value={content}
//         onChange={e => setContent(e.target.value)}
//         style={{ width: '100%', padding: '8px', marginBottom: '8px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '80px' }}
//       />
//       <button type="submit" style={{ backgroundColor: '#0070F3', color: '#fff' }}>投稿する</button>
//     </form>
//   )
// }

// src/components/PostForm.jsx
import React, { useState } from 'react'
import { supabase } from '../supabaseClient'

export default function PostForm({ user, onPostCreated }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 投稿時のみログインチェック
    if (!user) {
      alert('投稿するにはログインしてください')
      return
    }

    const { data, error } = await supabase
      .from('posts')
      .insert([{ title, content, user_id: user.id }])
      .select() // insert後のデータを取得

    if (error) {
      console.error('投稿エラー:', error)
    } else {
      onPostCreated(data[0])
      setTitle('')
      setContent('')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '24px' }}>
      <input
        type="text"
        placeholder="タイトル"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <textarea
        placeholder="内容"
        value={content}
        onChange={e => setContent(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '8px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '80px' }}
      />
      <button type="submit" style={{ backgroundColor: '#0070F3', color: '#fff' }}>投稿する</button>
    </form>
  )
}