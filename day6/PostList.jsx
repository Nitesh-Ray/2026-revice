import {useState, useEffect} from "react";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [userId, setUserId] = useState("");

  useEffect(() => {
    // This effect runs only once, when the component mounts
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
//-------------------------------
      const url = userId
        ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}&_limit=10`
        : `https://jsonplaceholder.typicode.com/posts?_limit=10`;
//-------------------------------

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=10",
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // empty array → runs once on mount

  if (loading) return <p>⏳ Loading posts...</p>;
  if (error) return <p>❌ Error: {error}</p>;

  return (
    <div>
      <h2>Latest Posts</h2>

// -------------------------------
      <button onClick={() => setUserId(1)}>Load posts for user 1</button>
      <button onClick={() => setUserId("")}>Load all posts</button>
// -------------------------------

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;