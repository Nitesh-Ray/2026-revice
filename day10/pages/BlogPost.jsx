import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function BlogPost() {
  const { postId } = useParams(); // note: we used :postId in route
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      });
  }, [postId]);

  if (loading) return <p>Loading post...</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link to="/blog">← Back to Blog</Link>
    </div>
  );
}