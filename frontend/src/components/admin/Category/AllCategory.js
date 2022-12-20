import React, { useState } from "react";
import CategoryService from "../../../services/CategoryService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Category from "./Category";
import Navbar from "../general/Navbar";
const AllCategory = () => {
  const [loading, setloading] = useState(true);
  const [catogories, setCatogories] = useState(null);

  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  useEffect(() => {
    if (isAuthenticated == "false") {
      navigate("/errorpage");
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await CategoryService.getAllCategories();
        setCatogories(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };

    fetchData();
  }, []);

  const editCategory = (e,id) =>{
    e.preventDefault();

    navigate(`/editcategory/${id}`);
  }


  return (
    <>
      <Navbar />
      <div className="container mx-auto my-8 ">
        <div className="h-12">
          <button
            onClick={() => navigate("/addcategory")}
            className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
          >
            Add Category
          </button>
        </div>

        <div className="flex shadow border-b">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Id
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Category Name
                </th>
                <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>

            {loading || catogories == null ? (
              <h1>Hey Its empty</h1>
            ) : (
              !loading && (
                <tbody className="bg-white">
                  {catogories.map((category) => (
                    <Category
                      key={category.id}
                      name={category.name}
                      id={category.id}
                      editCategory={editCategory}
                    />
                  ))}
                </tbody>
              )
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default AllCategory;
