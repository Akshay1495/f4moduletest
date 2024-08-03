import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const { loading, error, posts } = useSelector((state) => state.posts);
  const post = posts.find((post) => post.id === parseInt(id));

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;
  if (!post) return <p className="not-found">Post not found</p>;

  return (
    <div className="detail-page">
      <h1 className="title">{post.title}</h1>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" className="post-image" />
      <p><strong>User ID:</strong> {post.userId}</p>
      <p><strong>Title:</strong> {post.title}</p>
      <p><strong>Body:</strong> {post.body}</p>
    </div>
  );
};

export default DetailPage;
