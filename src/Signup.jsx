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

    if (formData.username.length != 0) {
      localStorage.setItem("userdat", JSON.stringify(formData));
      setFormdata({ username: "", email: "", password: "" });
    }
  }
  let usrData = JSON.parse(localStorage.getItem("userdat"));
  if (usrData != null) {
    console.log(usrData);
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
      <button onClick={() => localStorage.clear()}>Clear Storage</button>
    </div>
  );
}

export default Signup;
