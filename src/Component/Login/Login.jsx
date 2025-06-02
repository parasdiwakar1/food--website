import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);

    if (!email || !password) {
      setError("Please fill in both fields.");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setError("");
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-image">
          <img src="./food.jpg" alt="Login Visual" />
        </div>
        <div className="login-form-section">
          <h2>Welcome Back</h2>
          <p className="login-subtext">Log in to continue managing your account.</p>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            {error && <p className="error-message">{error}</p>}
            {isSuccess && <p className="success-message">Login Successful!</p>}

            <button type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="login-links">
            <a href="/forgot-password">Forgot Password?</a>
            <span> | </span>
            <a href="/signup">Create Account</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
