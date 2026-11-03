import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { initialProducts } from "../data/product";
import { ChevronLeft, TagIcon, Zap, ShoppingCartIcon } from "lucide-react";

const Product_Detail = () => {
  const { id } = useParams();
  const [product, setproduct] = useState();

  useEffect(() => {
    setproduct(initialProducts.find((data) => data.id == id));
  }, [id]);

  console.log(product);

  return (
    <div className=" max-w-4xl rounded-2xl py-12 px-10 mx-auto bg-gray-700/80 ">
      <Link to={"/"} className="flex text-gray-500/80">
        <ChevronLeft />
        <p>Back to All Products</p>
      </Link>
      <div className="flex justify-around mt-4 flex-wrap items-center gap-2.5">
        <div className="overflow-hidden   ">
          <img
            className="w-2xs h-2xs rounded-2xl "
            src={product?.image}
            alt={product?.name}
          />
        </div>
        <div className="w-2xs flex flex-col justify-between gap-1.5">
          <h1 className="font-bold text-white text-xl">{product?.name}</h1>
          <div className="text-orange-400 font-bold">
            ₹{product?.price.toFixed(2)}
          </div>
          <div className="flex border-b border-orange-400/80 pb-1 gap-1">
            <TagIcon className="text-orange-500/80" />
            <div className="font-bold">Product Overview</div>
          </div>
          <p className="text-gray-400/80 text-xs">{product?.description}</p>
          <div className="bg-gray-600/80 text-xs py-3 px-2 rounded-2xl">
            <ul>
              <li className="flex text-xs items-center">
                <Zap className="text-orange-500/80 w-4 h-4 " />
                <span className="text-gray-50/80">
                  High-Quality, Professional Grade Materials
                </span>
              </li>
              <li className="flex text-xs items-center">
                <Zap className="text-orange-500/80 w-4 h-4 " />
                <span className="text-gray-50/80">
                  Comprehensive 1-Year Manufacturer Warranty
                </span>
              </li>
              <li className="flex text-xs items-center">
                <Zap className="text-orange-500/80 w-4 h-4 " />
                <span className="text-gray-50/80">
                  Immediate Shipping for In-Stock Items
                </span>
              </li>
            </ul>
          </div>
          <button className="flex bg-orange-500/90  rounded-2xl uppercase font-bold px-14 py-2 cursor-pointer">
            <ShoppingCartIcon />
            <h1>Add to cart</h1>
          </button>
          <Link to={'/'} className="flex border border-orange-500/90 text-orange-500/70 bg-gray-700/80  rounded-2xl uppercase font-bold px-14 py-2 cursor-pointer">
            <h1>Keep Shopping</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product_Detail;
