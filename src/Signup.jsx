import React, { useState } from "react";

import "./signup.css";
function Signup() {
  const [formData, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    localStorage.setItem("userdat", formData);
  }

  return (
    <div className="signup">
      <form action="" onSubmit={handleSubmit}>
        <h3>Enter name</h3>
        <input
          type="text"
          value={formData.username}
          onChange={(e) =>
            setFormdata({ ...formData, username: e.target.value })
          }
        />
        <h3>Enter email</h3>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormdata({ ...formData, email: e.target.value })}
        />
        <h3>Password</h3>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormdata({ ...formData, password: e.target.value })
          }
        />
        <br />
        <input type="submit" className="button" />
      </form>
    </div>
  );
}

export default Signup;
