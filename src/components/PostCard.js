import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
      <div className="post-content">
        <p>User ID: {post.userId}</p>
        <p>Title: {post.title.length > 20 ? post.title.substring(0, 17) + '...' : post.title}</p>
        <p>Body: {post.body.length > 30 ? post.body.substring(0, 27) + '...' : post.body}</p>
        <Link to={`/item/${post.id}`}>Read More...</Link>
      </div>
    </div>
  );
};

export default PostCard;
