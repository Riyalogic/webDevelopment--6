import React from "react";

export const Products = () => {
  return(
    <>
  <div className=" p-10 grid  grid-cols-4">
    <div className=" w-75 border rounded h-100 p-3">
      <div className=" w-full h-40">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
          alt=""
          className=" w-full h-full object-contain"
        />
      </div>
      <div>
        <span></span>
        <p></p>
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
