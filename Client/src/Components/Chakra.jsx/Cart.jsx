import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  Center,
  Box,
  Image,
  Heading,
  useToast,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import React, {useContext, useEffect, useState} from "react";
import {BsFillBagFill} from "react-icons/bs";
import {Dialog} from "../AppContext/action";
import {AppContext} from "../AppContext/AppContext";
import InitialFocus from "./PIN";
import PIN from "./PIN";

const Cart = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [price, setPrice] = useState(0);
  const {cart, setCart} = useContext(AppContext);
  const [quan, setQuan] = useState(1);
  const toast = useToast();
  console.log(cart);

  let sum = 0;
  let rprice;
  const handlePrice = () => {
    cart.map((item) => {
      if (typeof item.price == "string") {
        rprice = item.rprice.replace(/[^0-9\-]/g, "");
      } else {
        rprice = item.rprice;
      }
      sum += Number(rprice) * Number(quan);
    });
    setPrice(sum);
  };
  console.log(sum);

  useEffect(() => {
    handlePrice();
  }, [cart, quan]);


  const REmove = (id) => {
    if (id !== -1) {
      cart.splice(id, 1);
      setCart([...cart], cart);
    }
    {
      toast({
        title: "Removed",
        status: "warning",
        position: "top-right",
        duration: 2000,
        isClosable: true,
      });
    }
   
  };

  return (
    <>
      <Text onClick={onOpen} cursor={"pointer"}>
        <BsFillBagFill size={18} w={6} h={6} />
      </Text>
      <Drawer size={"md"} isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>YOUR CART</DrawerHeader>

          <DrawerBody>
            {cart.map((el, i) => {
              return (
                <Box
                  key={el.id}
                  border="1px solid"
                  mb={3}
                  display={"flex"}
                  h={"86px"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap={3}
                >
                  <Image w={"90px"} h={"80px"} src={el.img} />
                  <Box display={"flex"} gap={"10px"}>
                    {" "}
                    <Button
                      disabled={quan == 1}
                      onClick={() => setQuan(quan - 1)}
                    >
                      -
                    </Button>
                    <Button>{quan}</Button>
                    <Button onClick={() => setQuan(quan + 1)}>+</Button>
                  </Box>
                  <Heading pr={1} fontSize={14}>
                    {el.rprice}
                  </Heading>
                  <Button onClick={()=>REmove(i)}>Remove</Button>
                </Box>
              );
            })}
            <Text
              textAlign={"Center"}
              fontFamily={"cursive"}
              fontSize="20px"
              bg={"teal"}
              p={2}
              color="white"
            >
              {!price ? "Your Cart is Empty" : "Total : US$ " + price}
            </Text>
          </DrawerBody>

          <DrawerFooter w={"full"}>
            <InitialFocus />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
