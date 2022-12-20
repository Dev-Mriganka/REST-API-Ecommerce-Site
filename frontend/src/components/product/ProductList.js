import React, { useEffect } from "react";
import ProductService from "../../services/ProductService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
const ProductList = () => {
  const [productData, setproductData] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await ProductService.getAllProducts();
        setproductData(response.data);
        console.log(response.data[0].category.name);
      } catch (error) {}
      setloading(false);
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const showProduct = (e, id) => {
    e.preventDefault();

    navigate(`/productpage/${id}`);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Trending Products
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3  justify-center items-center sm:grid-cols-1 ">
          {loading || productData == null ? (
            <h1>Hey Its Empty</h1>
          ) : (
            !loading &&
            productData.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.imageUrl}
                name={product.name}
                price={product.price}
                category={product.category.name}
                showProduct = {showProduct}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
