import React, { useState } from "react";

function Login() {
  cons[(logindata, setLogindata)] = useState({
    username: "",
    password: "",
  });
  return (
    <div>
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
            onChange={(e) =>
              setFormdata({ ...formData, email: e.target.value })
            }
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
    </div>
  );
}

export default Login;
