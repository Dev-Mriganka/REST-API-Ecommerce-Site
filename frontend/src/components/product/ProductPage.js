import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "../../services/ProductService";
import Navbar from "./../general/Navbar";
import SingleProduct from "./SingleProduct";

const ProductPage = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProductService.getProductById(id);
        // console.log(response.data);
        setProduct(response.data);
        console.log(product);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      {!loading && (
        <SingleProduct
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          imageUrl={product.imageUrl}
          price={product.price}
          stock={product.stock}
        />
      )}
    </div>
  );
};

export default ProductPage;
