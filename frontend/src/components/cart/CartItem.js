import React from "react";

const CartItem = (props) => {
  const { name, image, price, quantity, total } = props;

  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={image} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{name}</span>
          <span className="text-red-500 text-xs">{name}</span>
          <a
            href="#"
            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
          >
            Remove
          </a>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <span className="text-center w-1/5 font-semibold text-sm">
          {quantity}
        </span>
      </div>

      <span className="text-center w-1/5 font-semibold text-sm">&#8360; {price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">&#8360; {total}</span>
    </div>
  );
};

export default CartItem;
