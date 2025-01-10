import React, { useState } from "react";
import "./Login.css"; // Import the CSS file

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loading spinner
  const [isSuccess, setIsSuccess] = useState(false); // State to track successful login

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    
    // Simple form validation
    if (!email || !password) {
      setError("Please fill in both fields.");
      setIsLoading(false);
      return;
    }

    // Simulate a successful login (replace with actual logic in real scenarios)
    setTimeout(() => {
      setError(""); // Clear error
      setIsLoading(false);
      setIsSuccess(true);
      console.log("Form Submitted:", { email, password });
    }, 2000);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <p className="login-description">
        Please enter your credentials to access your account. If you don't have an account, feel free to sign up below.
      </p>
      <form onSubmit={handleSubmit} className="login-form">
        {/* Email field */}
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password field */}
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Error message */}
        {error && <p className="error-message">{error}</p>}

        {/* Success message */}
        {isSuccess && <p className="success-message">Login Successful!</p>}

        {/* Submit button */}
        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* Links for Forgot Password and Sign Up */}
      <div className="login-footer">
        <p className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </p>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
