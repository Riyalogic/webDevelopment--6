import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./registerPage";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="login-page">
        <nav className="navBar">
          <div className="logo">craving</div>
          <div className="nav-buttons">
            <button className="login-btn">Login</button>
            <button className="register-btn">Register</button>
          </div>
        </nav>
        <div className="login-container">
          <div className="login-card">
            <h1>Welcome Back</h1>
            <p>Login to your Craving account</p>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <div className="options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="/">Forget Password</a>
            </div>
            <button className="submit-btn">Login</button>
            <div className="divider">
              <span>Don't have an account?</span>
            </div>
            <button className="create-account">Create an account</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
