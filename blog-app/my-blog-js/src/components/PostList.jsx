// // src/components/PostList.js
// import { useEffect, useState } from 'react'
// import { supabase } from '../supabaseClient'

// export default function PostList() {
//   const [posts, setPosts] = useState([])

//   useEffect(() => {
//     fetchPosts()
//   }, [])

//   const fetchPosts = async () => {
//     let { data, error } = await supabase
//       .from('posts')
//       .select('*')
//       .order('created_at', { ascending: false })
//     if (error) console.log('Error fetching posts:', error)
//     else setPosts(data)
//   }

//   return (
//     <div>
//       <h1>ブログ一覧</h1>
//       {posts.map(post => (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.content}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// // 投稿一覧をリアルタイム更新
// // src/components/PostList.js
// import { useEffect, useState } from 'react'
// import { supabase } from '../supabaseClient'

// export default function PostList() {
//   const [posts, setPosts] = useState([])

//   // 初回読み込み
//   useEffect(() => {
//     fetchPosts()

//     // リアルタイム購読
//     const subscription = supabase
//       .channel('public:posts')
//       .on('postgres_changes', { event: '*', schema: 'public', table: 'posts' }, payload => {
//         console.log('Change received!', payload)
//         fetchPosts() // 更新を反映
//       })
//       .subscribe()

//     return () => {
//       supabase.removeChannel(subscription)
//     }
//   }, [])

//   const fetchPosts = async () => {
//     const { data, error } = await supabase
//       .from('posts')
//       .select('*')
//       .order('created_at', { ascending: false })
//     if (error) console.log('Error fetching posts:', error)
//     else setPosts(data)
//   }

//   return (
//     <div>
//       <h1>ブログ一覧</h1>
//       {posts.map(post => (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.content}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// src/components/PostList.jsx
import React from 'react'
import PostCard from './PostCard.jsx'

export default function PostList({ posts }) {
  return (
    <div style={{display:'grid', gridTemplateColumns: 'repeat(3, 1fr)' , gap:'16px'}}>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}