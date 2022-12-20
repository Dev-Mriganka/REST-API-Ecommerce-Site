import React from "react";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const { id, name, description, imageUrl, price, stock, updateProduct } =
    props;
  const navigate = useNavigate();
  return (
    <div class="flex justify-center  py-4">
      <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
          <img class="rounded-t-lg" src={imageUrl} alt="" />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{name}</h5>
          <h5 class="text-gray-900 text-xl font-medium mb-2">Rs {price}</h5>
          <p class="text-gray-700 text-base mb-4">{description}</p>
          <p class="text-gray-700 text-base mb-4">
            <span class="text-gray-700 text-lg font-medium mb-2">
              Available Stock :
            </span>
            {stock}
          </p>

          <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button
              type="button"
              onClick={(e) => updateProduct(e, id)}
              class=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Edit
            </button>
            <button
              type="button"
              class=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
