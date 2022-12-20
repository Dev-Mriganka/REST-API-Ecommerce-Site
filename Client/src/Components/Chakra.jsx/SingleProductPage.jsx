import {StarIcon} from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Center,
  Circle,
  Divider,
  Flex,
  HStack,
  Image,
  Skeleton,
  Spacer,
  Spinner,
  Stack,
  Text,
  useToast,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import React, {useContext, useEffect, useReducer, useState} from "react";
// import { AppContext } from '../../Context/AppContext';
// import Loading from './Loding';
import {AiOutlineHeart} from "react-icons/ai";
import {BiShoppingBag} from "react-icons/bi";
import {CArt} from "../AppContext/action";
import {AppContext} from "../AppContext/AppContext";
import Navbar from "../SmallNav/Navbarmain";

const SingleProductPage = () => {
  const [buttonLoad, setButtonLoad] = useState(false);
  const { cart, setCart } = useContext(AppContext);
  const toast = useToast();
  let DataId = JSON.parse(localStorage.getItem("dataID"));
const [isLoading, setIsLoading] = useState(true);

setTimeout(() => {
  setIsLoading(false);
}, 1000);
  let rating = Math.floor(Math.random() * 5 + 1);
  let review = Math.floor(Math.random() * (30 - 10 + 1) + 10);

  const AddtoCart = () => {
    setButtonLoad(true);

    // localStorage.setItem("CartData", JSON.stringify(DataId))

    setCart([...cart, DataId]);
    toast({
      title: "Added to cart",
      position: "top-right",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };
  {
    buttonLoad
      ? setTimeout(() => {
        setButtonLoad(false);
      }, 1000)
      : null;
  }
  console.log(typeof DataId.price, DataId.rprice)
  let A;
  if (typeof DataId.rprice=="string") {
     A=DataId.rprice
  }
  else {
   A= "US$ " + DataId.rprice
  }
  
 if (isLoading) {
   return (
     <Stack>
       {Array(25)
         .fill("")
         .map((_, i) => (
           <Skeleton height="20px" />
         ))}
     </Stack>
   );
 }

  return (
    <>
      <Navbar />
      <Box
        w={"90%"}
        m="auto"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems="center"
        mt={20}
      >
        <Box w={"40%"}>
          <Image w={"300px"} m={"auto"} borderRadius={15} src={DataId.img} />
          <Image w={"250px"} m={"auto"} borderRadius={15} src={DataId.image} />
        </Box>
        <Box>
          <Text fontSize="30" fontWeight="bold" marginTop={50} color="gray.500">
            YOOX
          </Text>
          <Text marginTop={3} fontSize="2xl" color="gray.500">
            {DataId.title}
          </Text>
          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {review + "k"} reviews
            </Box>
          </Box>

          <Stack>
            <HStack alignContent="center">
              <Text fontWeight="bold" fontSize="4xl">
                {DataId.price?A:"Sold"}
                 
                
              </Text>

              <Text as="s" marginLeft={4} fontSize="xl">
                {typeof DataId.price == "string"
                  ? DataId.price
                  : "US$ " + DataId.price}
              </Text>
            </HStack>
            <Text>inclusive of all taxes</Text>
          </Stack>

          <Divider />

          <Badge fontSize="xl" variant="subtle" colorScheme="teal">
            {" "}
            {"50%"} off for Prime members only{" "}
          </Badge>

          <Text>
            Prime members get an extra discount of USD20 and FREE Shipping /
            Learn more
          </Text>

          <Divider />

          <Text fontWeight="extrabold">SELECT SIZE</Text>

          <HStack spacing={5}>
            <Center
              w="50px"
              h="50px"
              fontSize="xl"
              border="1px solid"
              // color="black"
            >
              S
            </Center>
            <Center
              w="50px"
              h="50px"
              fontSize="xl"
              border="1px solid"
              // color="black"
            >
              M
            </Center>
            <Center
              w="50px"
              h="50px"
              fontSize="xl"
              border="1px solid"
              // color="black"
            >
              L
            </Center>
            <Center w="50px" h="50px" fontSize="xl" bg="tomato" color="white">
              XL
            </Center>
            <Center
              w="50px"
              h="50px"
              fontSize="xl"
              border="1px solid"
              // color="black"
            >
              2XL
            </Center>
            <Center
              w="50px"
              h="50px"
              fontSize="xl"
              border="1px solid"
              // color="black"
            >
              3XL
            </Center>
          </HStack>

          <Text>
            Garment: Chest (in Inch): 44.0 Front Length (in Inch): 30.0 Sleeve
            Length (in Inch): 25.5
          </Text>

          <Divider />

          <HStack w="full">
            <Button
              disabled={!DataId.rprice}
              onClick={AddtoCart}
              fontSize="x-large"
              padding={8}
              w="full"
              colorScheme="yellow"
            >
              {buttonLoad ? (
                <Spinner
                  thickness="4px"
                  speed="0.55s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="lg"
                />
              ) : (
                <BiShoppingBag fontSize="30px" />
              )}
            </Button>

            <Button
              fontSize="x-large"
              padding={8}
              w="full"
              colorScheme="teal"
              variant="outline"
            >
              <AiOutlineHeart fontSize="30px" /> WISHLIST
            </Button>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default SingleProductPage;
