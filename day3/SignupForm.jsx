import { useState } from 'react';

function SignupForm() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', form);
    alert(`Welcome, ${form.email}!`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      <label>
        <input
          name="agree"
          type="checkbox"
          checked={form.agree}
          onChange={handleChange}
        />
        I agree to terms
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;