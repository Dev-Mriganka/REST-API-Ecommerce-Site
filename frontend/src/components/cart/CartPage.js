import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartService from "../../services/CartService";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";
import Navbar from "./../general/Navbar";

const CartPage = () => {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartDetails, setCartDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CartService.getCartByUser();
        console.log(response.data);
        setCartDetails(response.data);
        setCartItems(response.data.cartItems);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{cartItems.length}</h2>
            </div>

            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            {loading || cartDetails == null ? (
              <h1>Cart is Empty</h1>
            ) : (
              !loading &&
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  name={item.productDto.name}
                  image={item.productDto.imageUrl}
                  price={item.productDto.price}
                  quantity={item.qantity}
                  total={item.total}
                />
              ))
            )}

            <a
              href="/home"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </a>
          </div>

          {!loading && cartDetails != null && (
            <CheckOut
              quantity={cartItems.length}
              totalCost={cartDetails.totalCost}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
