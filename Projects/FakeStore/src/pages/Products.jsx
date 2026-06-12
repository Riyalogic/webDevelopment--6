import React, { useState } from "react";

export const Products = () => {
  const [Products, setProducts] = useState();
  
  return(
    <>
  <div className=" p-10 grid  grid-cols-4 gap-5">
    <div className=" w-75 border rounded h-100 p-3">
      <div className=" w-full h-40">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
          alt=""
          className=" w-full h-full object-contain"
        />
      </div>
        <div className=" flex flex-col justify-between h-50">
          <div>
            <p className=" text-xl">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
            <p className=" text-sm capitalize text-gray-500">men's clothing</p>
            <p>109.95</p>
            <p>3.5/5</p>
          </div>
        
        <button className="bg-orange-400 rounded-full px-4 py-2">
          Add to cart
        </button>
      </div>
    </div>
  </div>
  </>
  );
};

export default Products;
