import React, {useContext} from "react";
import {Box, color} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import "./navbar.css";
import {BsFillBagFill, BsSuitHeart, BsSearch} from "react-icons/bs";
import {AppContext} from "../AppContext/AppContext";
import Cart from "../Chakra.jsx/Cart";
export default function Nav2() {
  const {colored} = useContext(AppContext);
  let a;
  {
    colored === "light" ? (a = "white") : (a = "#1A202C");
  }

  console.log(a);
  return (
    <div>
      <div className="navb">
        <Box bg={a}>
          <Box
            w="70%"
            m="auto"
            h="60px"
            fontSize={12.5}
            fontWeight={"555"}
            fontFamily={"Montserrat,sans-serif"}
            display="flex"
            alignItems="center"
            justifyContent="space-around"
          >
            <div style={{display: "flex", columnGap: "20px"}}>
              <Link to="/womenPage">WOMEN</Link>
              <Link to="/menPage">MEN</Link>
              <Link to="/home/kids">KIDS</Link>
              <Link to="/arts">DESIGN+ART</Link>
            </div>

            <Link to={"/"}>
              <img
                style={{width: "70px", marginRight: "110px"}}
                src={"https://www.yoox.com/media/yoox16/header/yoox-logo-p.svg"}
                alt="Logo"
              />
            </Link>

            <div
              style={{
                display: "flex",
                alignContent: "center",
                columnGap: "45px",
              }}
            >
              <Link style={{fontSize: "20px"}} to="/designart">
                {BsSearch()}{" "}
              </Link>
              <Link style={{fontSize: "20px"}} to="/wishlist">
                {BsSuitHeart()}{" "}
              </Link>
  
              {<Cart/>}
              
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
}
