import React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
} from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img
            src="/logo.png"
            alt="logo"
          />
        </div>

        <div className="nav-buttons">
          <button className="login-btn">
            Login
          </button>

          <button className="register-btn">
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">

        <div className="overlay"></div>

        {/* Left Arrow */}
        <button className="slider-btn left">
          <FaChevronLeft />
        </button>

        {/* Right Arrow */}
        <button className="slider-btn right">
          <FaChevronRight />
        </button>

        <div className="hero-content">
          <h1>
            Your Favorite Food,
            <br />
            Delivered Fast
          </h1>

          <p>
            Order from thousands of restaurants and get it
            delivered to your doorstep
          </p>

          <div className="hero-buttons">
            <button className="signup-btn">
              Sign Up
            </button>

            <button className="order-btn">
              Order Now
            </button>
          </div>

          <div className="search-box">
            <FaSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search restaurants or dishes..."
            />
          </div>
        </div>

        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
          <span className="active"></span>
        </div>

      </section>
    </div>
  );
};

export default Home;