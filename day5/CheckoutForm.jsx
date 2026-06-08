import {useState} from "react";

function CheckoutForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    card: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
    if (errors[name]) setErrors({...errors, [name]: ""});
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!form.address.trim()) newErrors.address = "Address is required.";
    if (!form.city.trim()) newErrors.city = "City is required.";
    if (!form.zip.trim()) {
      newErrors.zip = "ZIP code is required.";
    } else if (!/^\d{5}$/.test(form.zip)) {
      newErrors.zip = "ZIP must be 5 digits.";
    }
    if (!form.card.trim()) {
      newErrors.card = "Card number is required.";
    } else if (!/^\d{16}$/.test(form.card)) {
      newErrors.card = "Card must be 16 digits.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log("Order placed:", form);
      // In a real app, send to server
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    margin: "5px 0",
    boxSizing: "border-box",
  };

  return (
    <div style={{maxWidth: "400px", margin: "auto", fontFamily: "sans-serif"}}>
      <h2>Checkout</h2>
      {submitted && (
        <div
          style={{
            background: "#d4edda",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "15px",
          }}
        >
          ✅ Order placed successfully! Thank you, {form.fullName}.
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            style={inputStyle}
          />
          {errors.fullName && (
            <small style={{color: "red"}}>{errors.fullName}</small>
          )}
        </div>
        <div>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            style={inputStyle}
          />
          {errors.email && <small style={{color: "red"}}>{errors.email}</small>}
        </div>
        <div>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            style={inputStyle}
          />
          {errors.address && (
            <small style={{color: "red"}}>{errors.address}</small>
          )}
        </div>
        <div style={{display: "flex", gap: "10px"}}>
          <div style={{flex: 1}}>
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
              style={inputStyle}
            />
            {errors.city && <small style={{color: "red"}}>{errors.city}</small>}
          </div>
          <div style={{flex: 1}}>
            <input
              name="zip"
              value={form.zip}
              onChange={handleChange}
              placeholder="ZIP"
              style={inputStyle}
            />
            {errors.zip && <small style={{color: "red"}}>{errors.zip}</small>}
          </div>
        </div>
        <div>
          <input
            name="card"
            value={form.card}
            onChange={handleChange}
            placeholder="Card Number (16 digits)"
            style={inputStyle}
          />
          {errors.card && <small style={{color: "red"}}>{errors.card}</small>}
        </div>
        <button
          type="submit"
          style={{
            marginTop: "15px",
            width: "100%",
            padding: "10px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;


// // Inside form state add: password: '', confirmPassword: '', agree: false
// // Handle checkbox: 
// const handleChange = (e) => {
//   const { name, value, type, checked } = e.target;
//   setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
// };
// // Validate:
// if (!form.password || form.password.length < 8 || !/\d/.test(form.password))
//   newErrors.password = 'Password min 8 chars, include a number.';
// if (form.password !== form.confirmPassword)
//   newErrors.confirmPassword = 'Passwords do not match.';
// if (!form.agree)
//   newErrors.agree = 'You must agree to the terms.';