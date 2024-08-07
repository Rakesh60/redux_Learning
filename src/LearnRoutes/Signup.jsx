import React, { useState } from 'react';
import "./signup.css"

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    e.preventDefault(); // Not strictly necessary here, but can be kept for consistency
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", formData); // Log submitted data (optional)

    // Clear form data after submission
    setFormData({ username: "", email: "", password: "" });
  }

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h3>Enter name</h3>
        <input
          type="text"
          name="username"
          value={formData.username} // Set initial value from state
          onChange={handleChange}
        />
        <h3>Enter email</h3>
        <input
          type="email"
          name="email"
          value={formData.email} // Set initial value from state
          onChange={handleChange}
        />
        <h3>Password</h3>
        <input
          type="password"
          name="password"
          value={formData.password} // Set initial value from state
          onChange={handleChange}
        />
        <br />
        <input type="submit" className="button" value="Submit" />
      </form>
      <button onClick={() => localStorage.clear()}>Clear Storage</button>
      <div>Form Data (for debugging): {JSON.stringify(formData)}</div>
    </div>
  );
};

export default SignupForm;
