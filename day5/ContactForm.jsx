import {useState} from "react";

function ContactForm() {
  // ----------------
  // const handleBlur = (e) => {
  //   const {name} = e.target;
  //   const newErrors = {...errors};
  //   if (!form[name].trim()) {
  //     newErrors[name] =
  //       `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
  //   } else {
  //     delete newErrors[name];
  //   }
  //   setErrors(newErrors);
  // };

  // Usage: onBlur={handleBlur}

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
    // Optional: clear the error for that field as user types
    if (errors[name]) {
      setErrors({...errors, [name]: ""});
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Sending:", form);
      alert("Message sent successfully!");
      // Reset form (optional)
      setForm({name: "", email: "", message: ""});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <div>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
        />
        {errors.name && <small style={{color: "red"}}>{errors.name}</small>}
      </div>
      <div>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
        />
        {errors.email && <small style={{color: "red"}}>{errors.email}</small>}
      </div>
      <div>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message"
          rows={4}
        />
        {errors.message && (
          <small style={{color: "red"}}>{errors.message}</small>
        )}
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
