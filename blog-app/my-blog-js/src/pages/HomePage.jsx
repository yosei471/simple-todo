// import React, { useState } from 'react'
// import PostList from '../components/PostList.jsx'
// import { useNavigate } from 'react-router-dom'

// export default function HomePage({ user }) {
//   const navigate = useNavigate()
//   const [search, setSearch] = useState('')

//   const dummyPosts = [
//     {id:1, title:'初めての記事', content:'こんにちは世界！', author:'Alice', date:'2026-02-21'},
//     {id:2, title:'React入門', content:'Reactを勉強しよう', author:'Bob', date:'2026-02-20'},
//     {id:3, title:'HubSpot風デザイン', content:'UIを整えるサンプル', author:'Charlie', date:'2026-02-19'}
//   ]

//   const [posts, setPosts] = useState(dummyPosts)
//   const filteredPosts = posts.filter(p =>
//     p.title.toLowerCase().includes(search.toLowerCase())
//   )

//   return (
//     <div style={{width:'100%'}}>
//       <header style={{
//         display:'flex',
//         justifyContent:'space-between',
//         alignItems:'center',
//         marginBottom:'24px',
//         backgroundColor:'#001F54',
//         color:'#fff',
//         padding:'12px 24px'
//       }}>
//         <h1 style={{color:'#FF7A59', margin:0}}>MY BLOG</h1>
//         <div>
//           <button style={{marginRight:'8px'}} onClick={() => navigate('/')}>HOME</button>
//           {/* 投稿ボタンは遷移 */}
//           <button style={{backgroundColor:'#0070F3'}} onClick={() => navigate('/post')}>投稿する</button>
//         </div>
//       </header>

//       <input
//         type="text"
//         placeholder="記事検索..."
//         value={search}
//         onChange={e=>setSearch(e.target.value)}
//         style={{padding:'8px', borderRadius:'4px', border:'1px solid #ccc', marginBottom:'12px', width:'100%'}}
//       />

//       {/* 投稿フォームは削除 */}
//       <PostList posts={filteredPosts} />
//     </div>
//   )
// }


// src/pages/HomePage.jsx
import React, { useState } from 'react'
import PostList from '../components/PostList.jsx'
import { useNavigate } from 'react-router-dom'

export default function HomePage({ user, posts, setPosts }) {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const filteredPosts = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ width: '100%' }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
        backgroundColor: '#001F54',
        color: '#fff',
        padding: '12px 24px'
      }}>
        <h1 style={{ color: '#FF7A59', margin: 0 }}>MY BLOG</h1>
        <div>
          <button style={{ marginRight: '8px' }} onClick={() => navigate('/')}>HOME</button>
          <button style={{ backgroundColor: '#0070F3' }} onClick={() => navigate('/post')}>投稿する</button>
        </div>
      </header>

      <input
        type="text"
        placeholder="記事検索..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '12px', width: '100%' }}
      />

      <PostList posts={filteredPosts} />
    </div>
  )
}