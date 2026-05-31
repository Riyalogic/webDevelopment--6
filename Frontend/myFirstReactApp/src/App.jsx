import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
    <>
    <Header />
      <div id="abcd">My First React App</div>

      <p className="bg-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro at beatae
        fugit molestiae deserunt nemo, sapiente dignissimos tempora laudantium
        asperiores blanditiis quisquam fuga libero quis rem adipisci laboriosam
        labore corrupti?
      </p>

    <button>Click Here</button>
    <Footer />
    </>
  );
}

export default App;
