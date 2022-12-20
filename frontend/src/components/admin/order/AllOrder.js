import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderDetail from "./OrderDetail";

const AllOrder = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated == "false") {
      navigate("/errorpage");
    }
  }, []);

  return (
    <div>
      <OrderDetail />
    </div>
  );
};

export default AllOrder;
