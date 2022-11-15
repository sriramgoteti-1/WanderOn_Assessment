import React from 'react'
import "../Post/post.css"

export default function ({post}) {
  return (
    <div className="post">
    <img
    className="postImg"
    src={post.featuredImage.link}
    alt=""
    />
    <div className="postInfo">
    <div className="postTags">
          {((post.tags).slice(0,5)).map((c) => (
            <span className="postTag">{c.name}</span>
          ))}
        </div>
          <span className="postName">{post.title}</span>
        <br/>
        <div className="postDesc">
            <p>
            {post.meta.description}
            </p>
        </div>
    </div>
</div>
  )
}
