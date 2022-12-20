import React, { useEffect } from "react";
import { useState } from "react";
import CategoryService from "../../../services/CategoryService";
import swal from "sweetalert";
import ProductService from "../../../services/ProductService";
import { useNavigate, useParams } from "react-router-dom";
const EditProduct = () => {
  const { id } = useParams();

  // console.log(id);
  const [product, setProduct] = useState({
    category: {
      id: 0,
      name: "",
    },
    description: "",
    id: 0,
    imageUrl: "",
    name: "",
    price: 0,
    stock: 0,
  });

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

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

  const handleChange = (e) => {
    const value = e.target.value;

    setProduct({
      ...product,
      [e.target.name]: value,
    });
  };

  const handleChangeategory = (e) => {
    const value = e.target.value;

    setProduct({
      ...product,
      category: {
        ...product.category,
        [e.target.name]: value,
      },
    });
  };

  const editProduct = (e) => {
    e.preventDefault();

    ProductService.updateProduct(product)
      .then((res) => {
        console.log(res);
        swal({
          title: res.data,
          icon: "success",
        });
        navigate("/allproduct");
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: error.response.data.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="flex rounded justify-center items-center w-3/4 mx-auto my-8">
      <div className="px-8 py-8">
        <div className="font-bold text-2xl tracking-wider">
          <h1>Edit Product</h1>
        </div>

        {/* Input Fields */}
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">Id</label>
          <input
            type="number"
            name="id"
            value={product.id}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Product Name
          </label>
          <input
            type="string"
            name="name"
            value={product.name}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Image URL
          </label>
          <input
            type="string"
            name="imageUrl"
            value={product.imageUrl}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Description
          </label>
          <input
            type="string"
            name="description"
            value={product.description}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Available Stock
          </label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Category Id
          </label>
          <input
            type="number"
            name="id"
            value={product.category.id}
            onChange={(e) => handleChangeategory(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        {/* Buttons */}

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={editProduct}
            className="rounded text-white bg-green-500 hover:bg-green-700 px-6 py-2"
          >
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
