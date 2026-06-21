import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        "https://makeup-api.herokuapp.com/api/v1/products.json"
      );

      const data = await response.json();
      console.log("Total Product:", data.length);
      
      setProduct(data.slice(0, 1000));
      setProduct(data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      {/* Navbar */}
    <nav className="bg-pink-500 text-white p-4 flex justify-between items-baseline-last">
        <div className=" flex items-center gap-2">
            <FaStore className="text-2xl text-white" />
            <h1 className="text-2xl font-bold ">Beauty Store</h1>
        </div>
         <ul className="flex gap-5">
           <li>Home</li>
           <li>About</li>
           <li>Products</li>
           <li>Contact US</li>
         </ul>
      </nav>

      {/* Heading */}
      <h1 className="text-center text-4xl font-bold text-pink-500 my-8">
        Makeup Products
      </h1>

      {/* Loading */}
      {loading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <h2 className="text-3xl">Loading...</h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
          {product.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-lg p-4 hover:shadow-xl duration-300"
            >
              <img
                src={product.image_link}
                alt={product.name}
                className="w-full h-52 object-contain"
                onError={(e) => {
                    e.target.src = "https://via.placeholder.com/250x250?text=No+Image";
                }}
              />

              <h2 className="font-bold text-lg mt-3">
                {product.name?.length > 25
                  ? product.name.slice(0, 25) + "..."
                  : product.name}
              </h2>

              <p className="text-pink-500 font-semibold">
                {product.brand}
              </p>

              <p className="text-gray-500 capitalize">
                {product.product_type}
              </p>

              <p className="font-bold text-xl mt-2">
                ₹ {product.price ? Math.floor(product.price * 85) : "N/A"}
              </p>

              <button className="w-full mt-4 bg-pink-500 text-white py-2 rounded hover:bg-pink-600">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;