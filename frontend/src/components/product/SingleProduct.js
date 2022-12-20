import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import CartService from "../../services/CartService";

const SingleProduct = (props) => {
  const { id, name, description, imageUrl, price, stock } = props;

  const [cartDto, setCartDto] = useState({
    productId: id,
    qantity: 1,
    total: 0,
  });

  const handleChange = (e) => {
    console.log(e.target.name);

    const value = e.target.value;

    if (value >= 1) {
      setCartDto({
        ...cartDto,
        [e.target.name]: parseInt(value),
      });
    }
  };

  const addItemToCart = () => {
    console.log(cartDto);
    CartService.addItemToCart(cartDto)
      .then((res) => {
        swal({
          title: res.data,
          icon: "success",
        });
        console.log(res.data);
      })
      .catch((err) => {
        swal({
          title: err.response.data.message,
          icon: "error",
        });
        console.log(err);
      });
  };

  return (
    <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div class="flex justify-center items-center lg:flex-row flex-col gap-8">
        <div class="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
          {/* <p class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600  dark:text-white">
            Home / Furniture / Wooden Stool
          </p> */}
          <h2 class="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-gray-900 mt-4">
            {name}
          </h2>

          <p class="font-normal text-base leading-6 text-gray-600  mt-7">
            {description}
          </p>
          <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 dark:text-gray-900">
            &#8360; {price}
          </p>

          <div class="lg:mt-11 mt-10">
            <div class="flex flex-row justify-between">
              <p class="font-medium text-base leading-4 text-gray-600 ">
                Available Stock : {stock}
              </p>
              <div class="flex justify-center items-center">
                <label className="font-medium text-base leading-4 text-gray-600 ">
                  Enter Quantity :
                </label>
                <input
                  type="number"
                  name="qantity"
                  value={cartDto.qantity}
                  onChange={(e) => handleChange(e)}
                  className="border-transparent w-20 h-5"
                ></input>
              </div>
            </div>
            <hr class="bg-gray-200 w-full mt-4" />
          </div>

          <button
            onClick={addItemToCart}
            class="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
          >
            Add to Cart
          </button>
        </div>

        <div class="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
          <div class="w-full bg-gray-100 flex justify-center items-center">
            <img src={imageUrl} alt={name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
