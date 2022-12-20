import React from "react";

const ProductCard = (props) => {
  const { id, name, image, price, category, showProduct } = props;

  return (
    <div class="w-full max-w-sm bg-white rounded-lg drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="p-8 rounded-t-lg" src={image} alt="product image" />
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {category}
          </span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <a
            onClick={(e) => showProduct(e, id)}
            href="#"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Veiw Product
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
