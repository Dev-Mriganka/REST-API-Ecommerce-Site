import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./general/Navbar";

const Dashboard = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated == "false") {
      navigate("/errorpage");
    }
  }, []);

  return (
    <>
      <Navbar />
      {!isAuthenticated ? (
        <h1>Not authorized</h1>
      ) : (
        <div class="flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br">
          <div class="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
            <div class="max-w-md mx-auto space-y-6">
              <div class="flex flex-col">
                <a
                  href="/allcategory"
                  class="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800 text-lg inline-flex items-center justify-center"
                >
                  Categories
                </a>
                <a
                  href="/allproduct"
                  class="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800 text-lg inline-flex items-center justify-center"
                >
                  Products
                </a>
                <a
                  href="#"
                  class="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800 text-lg inline-flex items-center justify-center"
                >
                  Orders
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
