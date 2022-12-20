import {Badge, Box, Flex, Heading, Image, Text, VStack} from "@chakra-ui/react";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const WProductCard = ({
  img,
  brand,
  title,
  price,
  rprice,
  discount,
  image,
  id,
}) => {
  const navigate = useNavigate();
  const dataid = {
    img,
    brand,
    title,
    price,
    rprice,
    discount,
    image,
    id,
    quantity:1
  };
  // to navigate to More Product Details
  const VisitSingleProduct = () => {
localStorage.setItem("dataID",JSON.stringify(dataid))
    navigate(`/products/${id}`);
  };



  return (
    <div onClick={VisitSingleProduct}
      key={id}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "300px",
        height:"420px",
        padding: "0px 20px",
        paddingBottom:"10px",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
      }}
    >
      <Image src={img} />
      <img src={image} alt="" />
      <Box
        fontFamily={"monospace"}
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign="center"
      >
        {}
        <Heading fontSize={"15px"} textAlign={"center"}>{brand}</Heading>
        <Badge bg={"teal.300"} pos={"relative"} bottom="18rem" left={"80px"}>
          {discount}
        </Badge>
        <Box  >
          <Text fontFamily={"cursive"}>{title}</Text>
          <Text as="s">{price}</Text>
          <Text>{rprice}</Text>
        </Box>
      </Box>
    </div>
  );
};

export default WProductCard;
