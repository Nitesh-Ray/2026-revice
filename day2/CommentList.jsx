function CommentList({ comments = [] }) {
    // const comments = []

  if (comments.length === 0) {
    return <p>No comments yet. Be the first!</p>;
  }
  
  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id}>
          <strong>{comment.author}</strong>
          <p>{comment.text}</p>
          <small>❤️ {comment.likes} likes</small>
        </div>
      ))}
    </div>
  );
}

export default CommentList