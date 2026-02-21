// // src/components/PostCard.jsx
// import React from 'react'

// export default function PostCard({ post }) {
//   return (
//     <div className="post-card" style={{border:'1px solid #ddd', padding:'16px', marginBottom:'12px', borderRadius:'8px'}}>
//       <h2>{post.title}</h2>
//       <p>{post.content}</p>
//       <small>{post.author} • {post.date}</small>
//     </div>
//   )
// }

// src/components/PostCard.jsx
import React from 'react'

export default function PostCard({ post }) {
  return (
    <div style={{
      backgroundColor:'#fff',
      padding:'16px',
      borderRadius:'8px',
      boxShadow:'0 2px 6px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{marginTop:0, color:'#FF7A59'}}>{post.title}</h3>
      <p>{post.content}</p>
      <small style={{color:'#555'}}>{post.author} • {post.date}</small>
    </div>
  )
}