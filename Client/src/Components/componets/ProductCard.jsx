import {Badge, Flex, Image, Text, VStack} from "@chakra-ui/react";
import React from "react";
import HoverImage from "react-hover-image";
import {useNavigate} from "react-router-dom";


{/* <HoverImage src={yourFile} hoverSrc={yourFileHover} />; */}

const ProductCard = ({id, Display_image, hover_Image, Title, rprice, price}) => {
  const navigate = useNavigate();
  const dataid = {
    id: id,
    img: Display_image,
    title: Title,
    price: price,
    rprice: rprice,
  };
  // to navigate to More Product Details
  const VisitSingleProduct = () => {
    localStorage.setItem("dataID", JSON.stringify(dataid));
    navigate(`/products/${id}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "4px solid white",
      }}
    >
      <HoverImage
        onClick={VisitSingleProduct}
        src={Display_image}
        hoverSrc={hover_Image}
        alt={Title}
      />

      <VStack align="revert-layer">
        <Text fontSize="20" fontStyle="oblique" fontWeight="bold" marginTop={2}>
          YOOX
        </Text>
        <Text fontSize="15" color="gray.500">
          {Title}
        </Text>
        <Flex>
          <Text fontWeight="bold" fontSize="2xl">
            US$ {rprice}
          </Text>

          <Text as="s" marginLeft={4}>
            US$ {price}
          </Text>
        </Flex>
      </VStack>
    </div>
  );
};

export default ProductCard;
