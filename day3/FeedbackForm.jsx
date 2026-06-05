import { useState } from 'react';

function FeedbackForm() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    name: '',
    rating: 3,
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.comment.trim()) return;
    const newReview = {
      id: Date.now(),
      ...form,
      rating: Number(form.rating),
    };
    setReviews([newReview, ...reviews]); // add to top
    setForm({ name: '', rating: 3, comment: '' }); // reset
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>Leave a Review</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
        <select name="rating" value={form.rating} onChange={handleChange}>
          {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} Star{n>1?'s':''}</option>)}
        </select>
        <textarea name="comment" value={form.comment} onChange={handleChange} placeholder="Your feedback..." rows={3} />
        <button type="submit">Submit</button>
      </form>

      <h3>Reviews ({reviews.length})</h3>
      {reviews.length === 0 && <p>No reviews yet.</p>}
      {reviews.map(review => (
        <div key={review.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
          <strong>{review.name}</strong> – {'⭐'.repeat(review.rating)}
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default FeedbackForm;