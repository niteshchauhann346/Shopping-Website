import React from "react";
import { initialProducts } from "../data/product.js";
import { TagIcon } from "lucide-react";

const availableCategory = [
  "All",
  ...new Set(initialProducts.map((p) => p.category)),
];

const Category_filter = () => {
  const SelectedCategory = "Phone";

  return (
    <>
      <div className="filter_container py-4 px-5 flex gap-6 items-center border-b border-gray-600">
        <TagIcon className="text-orange-400" />
        {availableCategory.map((category) => (
          <button
            key={category}
            className={`py-2 px-5 text-sm font-bold rounded-full ${SelectedCategory === category ? `bg-orange-500/80` : `bg-gray-700/70 hover:text-orange-400  cursor-pointer`} `}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default Category_filter;
