import {Route, Routes} from "react-router-dom";
import SingleProductPage from "../Chakra.jsx/SingleProductPage";
import Design from "../componets/Designing";
import MenProducts from "../componets/MenProducts";

import {Signup} from "../componets/Register/Signup";
import WomenProducts from "../componets/WomenProduct";
import PrivateRoute from "../PrivateRoute";
import Home from "./Home";
import MainP from "./MainP";
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainP />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route
          path="/home/:name"
          element={
           <PrivateRoute>
            
              <Home />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/menPage"
          element={
            <PrivateRoute>
              <MenProducts />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/womenPage"
          element={
            <PrivateRoute>
              <WomenProducts />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/arts"
          element={
            <PrivateRoute>
           <Design/>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/products/:id"
          element={
            <PrivateRoute>
              {" "}
              <SingleProductPage />{" "}
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export {AllRoutes};
