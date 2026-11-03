import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "lucide-react";


const Product_card = ({ prop }) => {
  return (
    <>
      <div className="w-2xs  rounded-tr-2xl rounded-2xl overflow-hidden transition duration-200">
        <div className=" ">
          <Link to={`/Product/${prop.id}`} className="relative">
            <img
              src={prop.image}
              alt={prop.name}
              className=" w-full object-cover object-center "
            />
            <div className="absolute bottom-0 left-0 text-white bg-orange-500/80  rounded-tr-2xl font-bold space-x-1 text-2xl px-[5%]   ">
              ₹{prop.price.toFixed(2)}
            </div>
          </Link>
        </div>
        <div className="py-5 px-3 bg-gray-800/80">
        <Link to={`/Product/${prop.id}`}>
          <h2 className="line-clamp-1">{prop.name}</h2>
        </Link>
          <p className="text-xs text-gray-300/70">{prop.description}</p>
          <span className="text-gray-600/70 border border-gray-500 px-3 inline-block mt-4 mb-3 rounded-2xl">
            {prop.category}
          </span>
          <Link to={`/Product/${prop.id}`}>
          <button className="flex bg-orange-500/90 m-auto rounded-2xl uppercase font-bold px-14 py-2 cursor-pointer">
            <ShoppingCartIcon/>
          <h1>Add to cart</h1>
          </button>
          </Link>
        </div>
      </div>
      
    </>
  );
};

export default Product_card;
