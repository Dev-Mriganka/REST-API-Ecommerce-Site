import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import RegistrationForm from "./components/general/RegistrationFrom";
import LoginFrom from "./components/general/LoginFrom";
import Home from "./components/Home";
import Dashboard from "./components/admin/Dashboard";
import AddCategory from "./components/admin/Category/AddCategory";
import AddProduct from "./components/admin/Product/AddProduct";
import AllProduct from "./components/admin/Product/AllProducts";
import EditProduct from "./components/admin/Product/EditProduct";
import AllCategory from "./components/admin/Category/AllCategory";
import EditCategory from "./components/admin/Category/EditCategory";
import ProductPage from "./components/product/ProductPage";
import CartPage from "./components/cart/CartPage";
import OrderDetail from "./components/order/OrderDetail";
import AllOrder from "./components/admin/order/AllOrder";
import AllProducts from "./components/product/AllProducts";
import ErrorPage from "./components/general/ErrorPage";
import UpdateOrder from "./components/admin/order/UpdateOrder";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <RegistrationForm />,
  },
  {
    path: "/login",
    element: <LoginFrom />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/addcategory",
    element: <AddCategory />,
  },
  {
    path: "/addproduct",
    element: <AddProduct />,
  },
  {
    path: "/allproduct",
    element: <AllProduct />,
  },
  {
    path: "/editproduct/:id",
    element: <EditProduct />,
  },
  {
    path: "/allcategory",
    element: <AllCategory />,
  },
  {
    path: "/editcategory/:id",
    element: <EditCategory />,
  },
  {
    path: "/productpage/:id",
    element: <ProductPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/orders",
    element: <OrderDetail />,
  },
  {
    path: "/products",
    element: <AllProducts />,
  },
  {
    path: "/allorder",
    element: <AllOrder />,
  },
  {
    path: "/errorpage",
    element: <ErrorPage />,
  },
  {
    path: "/updateorder/:id",
    element: <UpdateOrder />,
  },
]);
//updating
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
