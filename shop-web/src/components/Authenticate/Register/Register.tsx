import { useState } from "react";
import "./Register.scss";

export default function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  const onLoginHandle = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`username`, username);
    console.log(`password`, password);
    console.log(`password2`, password2);
    console.log(`email`, email);
  };

  return (
    <div className="login">
      <h2 className="login-title">Register</h2>
      <form className="login-form" onSubmit={onLoginHandle}>
        <div className="form-group">
          <label htmlFor="username">User name</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Eamil</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            id="password2"
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        <div className="form-btns">
          <button className="btn btn-primary" type="submit">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
