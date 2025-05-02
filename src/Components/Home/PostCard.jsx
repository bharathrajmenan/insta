import React from 'react';


function PostCard({ post, index, setVideoRef, onPlay }) {
  const handlePlay = () => {
    onPlay(index);
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <img className="user-img" src={post.userImg} alt={post.username} />
        <span className="username">{post.username}</span>
      </div>

      {post.type === 'video' ? (
        <video
          ref={setVideoRef}
          className="post-img"
          controls
          onPlay={handlePlay}
        >
          <source src={post.postImg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img className="post-img" src={post.postImg} alt="Post" />
      )}
      

      <div className="post-actions">❤️ 💬 📤</div>
      <div className="caption">
        <strong>{post.username}</strong> {post.caption}
      </div>
    </div>
    
  );
}

export default PostCard;
