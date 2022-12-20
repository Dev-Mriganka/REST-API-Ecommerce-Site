import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import UserService from "../../services/UserService";
import AdminNavbar from "../admin/general/Navbar";

const Navbar = () => {
  // const navigate = useNavigate();
  // const handleClick = (e) => {
  //   console.log(e.target.getAttribute("href"));
  // };

  const toggleMenu = () => {
    console.log("hello");
    const menu = document.getElementById("navbar-default");
    console.log(menu);
    menu.classList.toggle("hidden");
  };
  const [action, setAction] = useState("");
  const isLoggedin = localStorage.getItem("isLoggedIn");

  console.log(typeof isLoggedin);
  const navigate = useNavigate();
  useEffect(() => {
    const updateAction = () => {
      if (isLoggedin == "true") {
        setAction("Logout");
      } else if (isLoggedin == "false") {
        setAction("Login");
      }
    };

    updateAction();
  }, []);

  const logOut = () => {
    if (isLoggedin == "false") {
      console.log("hello");
      navigate("/login");
      return;
    }
    UserService.logOutUser()
      .then((res) => {
        console.log(res);

        swal({
          title: res.data,
          icon: "success",
        });

        localStorage.setItem("isLoggedIn", false);
        localStorage.setItem("token", null);
        localStorage.setItem("isAuthenticated", false);
      })
      .catch((err) => {
        swal({
          title: err.response.data.message,
          icon: "error",
        });
        console.log(err);
      });
  };

  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <>
      {isAuthenticated == "true" ? (
        <AdminNavbar />
      ) : (
        <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 border-b-4">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://flowbite.com/" class="flex items-center">
              {/* <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-6 mr-3 sm:h-9"
                alt="Supershop Logo"
              /> */}
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Supershop
              </span>
            </a>
            <button
              onClick={() => {
                toggleMenu();
              }}
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="/home"
                    class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href="/orders"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Orders
                  </a>
                </li>
                <li>
                  <a
                    href="/cart"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Cart
                  </a>
                </li>
                <li>
                  <a
                    onClick={logOut}
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {action}
                  </a>
                </li>
                <li>
                  <a
                    href="/register"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
