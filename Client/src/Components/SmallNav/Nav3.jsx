import React, {useContext, useState} from "react";
import {Box, Center, Divider} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {AppContext} from "../AppContext/AppContext";
import {
  Accessories,
  Clothing,
  Designers,
  New,
  Shoes,
} from "../AppContext/action";
import SkinCare from "../Chakra.jsx/DesigneRsK";
import HairCare from "../Chakra.jsx/NewArrivals";
import BodyCare from "../Chakra.jsx/Clothing";
import Perfumes from "../Chakra.jsx/Shoes";
import ACCESSORIES from "../Chakra.jsx/ACCESSORIES";
export default function Nav3() {
  // const arr = ["NEW", "ARRIVALS", "DESIGNERS", "CLOTHING", "SHOES", "ACCESSORIES & BAGS", "8 BY YOOX", "YOOXYGEN", "COLLABORATIONS", "BEST", "OFFERS"];
  const {state, dispatch, colored} = useContext(AppContext);
  let a;
  let b;
  {
    colored == "light" ? (a = "black") : (a = "mediumspringgreen");}
  
  {
    colored != "light" ? (b = "black") : (b = "white");
  }
  return (
    <div>
      <Box color={b} bgImage={a} bg={a}>
        <Box
          w="70%"
          h="35px"
          m={"auto"}
          fontSize={11}
          fontWeight={"900"}
          fontFamily={"heading"}
          display="flex"
          alignItems="center"
          justifyContent={"space-evenly"}
        
        >
          <li
            onMouseEnter={() => dispatch(New(true))}
            onMouseLeave={() => dispatch(New(false))}
          >
            <Link to="/">NEW ARRIVALS</Link>
            {/* <SkinCare /> */}
            {state.new && <HairCare />}
          </li>
          <li
            onMouseEnter={() => dispatch(Designers(true))}
            onMouseLeave={() => dispatch(Designers(false))}
          >
            <Link to="/">DESIGNERS</Link>
            {/* <SkinCare /> */}
            {state.designers && <SkinCare />}
          </li>
          <li
            onMouseEnter={() => dispatch(Clothing(true))}
            onMouseLeave={() => dispatch(Clothing(false))}
            style={{marginRight: "40px"}}
          >
            <Link to="/">CLOTHING</Link>
            {/* <SkinCare /> */}
            {state.clothing && <BodyCare />}
          </li>
          <li
            onMouseEnter={() => dispatch(Shoes(true))}
            onMouseLeave={() => dispatch(Shoes(false))}
          >
            <Link to="/">SHOES</Link>
            {/* <SkinCare /> */}
            {state.shoes && <Perfumes />}
          </li>
          <li
            onMouseEnter={() => dispatch(Accessories(true))}
            onMouseLeave={() => dispatch(Accessories(false))}
          >
            <Link to="/">ACCESSORIES</Link>
            {/* <SkinCare /> */}
            {state.accessories && <ACCESSORIES />}
          </li>
        </Box>
      </Box>
    </div>
  );
}
