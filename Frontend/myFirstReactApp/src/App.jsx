import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About"
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
       <Header />

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
       </Routes>
      </BrowserRouter>
   
      {/* <div id="abcd">My First React App</div>

      <p className="bg-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro at beatae
        fugit molestiae deserunt nemo, sapiente dignissimos tempora laudantium
        asperiores blanditiis quisquam fuga libero quis rem adipisci laboriosam
        labore corrupti?
      </p>

    <button>Click Here</button>
    <Footer /> */}
    </>
  );
}

export default App;
