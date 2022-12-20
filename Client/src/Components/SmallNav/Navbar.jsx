import {EditIcon, UnlockIcon} from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, {useContext, useState} from "react";
import MEnu from "../Chakra.jsx/MEnu";
import {Icon} from "@chakra-ui/react";
import {useColorMode} from "@chakra-ui/react";
import Examplerh from "../../Check";
import {Link, Navigate} from "react-router-dom";
import {AppContext} from "../AppContext/AppContext";
import {AUTHLOGIN} from "../AppContext/action";

export const SmNavbar = () => {
  const {colored} = useContext(AppContext);
  let a;
  {
    colored === "light" ? (a = "white") : (a = "#1A202C");
  }
  const {colorMode, toggleColorMode} = useColorMode();
  const {state, dispatch} = useContext(AppContext);
  const toast = useToast();
  const initialFocusRef = React.useRef();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const check = {
    email: "",
    pass: "",
  };
  const [text, setText] = useState(check);

  const onchange = (e) => {
    const {name, value} = e.target;
    setText({...text, [name]: value});
  };
  console.log(text);
  const {email, pass} = text;

  let checkedForm = JSON.parse(localStorage.getItem("formREG"));

  const reconsider = () => {
    if (email == checkedForm.email && pass == checkedForm.password) {
      //  alert("Login SuccessFull");
      toast({
        title: "Logged in",
        position: "top-right",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      dispatch(AUTHLOGIN(true));
    } else if (email == "" || pass == "") {
      toast({
        title: "Fill the details first",
        status: "info",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Wrong credentials",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    setText(check);
  };

  //   if (state.isAuth) {
  //  return <Navigate to="/home/women"/>
  //   }
  const trigger = () => {
    dispatch(AUTHLOGIN(false));
  };

  console.log(state.authLogin);

  return (
    <>
      <Box w={
        "full"
      } pos={"sticky"}
        top={"0%"}
        zIndex={"20"}
      bg={a}>
      <Flex
 
        boxShadow="lg"
      >
        <Box
          display={"flex"}
          // border={"2px solid"}
          w={"75%"}
          m="auto"
          justifyContent={"space-between"}
        >
          <Box display={"flex"} alignItems={"center"}>
            <MEnu />
            <Text
              fontWeight={"bolder"}
              fontSize={"14px"}
              _hover={{textDecorationLine: "none"}}
              textDecorationLine={"underline"}
            >
              Customer Care
            </Text>
          </Box>
          <Box display={"flex"} alignSelf={"center"}>
            <Text fontWeight={"bolder"} fontSize={"13px"}>
              FREE STANDARD SHIPPING ON ORDERS OVER $100
            </Text>
          </Box>
          <Box
            fontWeight={"bolder"}
            fontSize={"13px"}
            display={"flex"}
            alignSelf={"center"}
            cursor={"pointer"}
          >
            {" "}
            <Link to="/register">
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignSelf={"center"}
              >
                <Icon as={EditIcon} pos="relative" top="1" mr={1} />
                <Text pos={"relative"} mr={"29px"}>
                  REGISTER
                </Text>
              </Box>
            </Link>
            <Box display={"flex"} alignSelf={"center"}>
              <Icon as={UnlockIcon} pos="relative" top="1" />
              {state.authLogin ? (
                <Center>
                  <Text onClick={trigger}>LOGOUT</Text>
                </Center>
              ) : (
                <Popover
                  initialFocusRef={initialFocusRef}
                  placement="bottom"
                  closeOnBlur={false}
                >
                  <PopoverTrigger>
                    <Text bg={"transparent"} fontSize={13} fontWeight={700}>
                      LOGIN
                    </Text>
                  </PopoverTrigger>
                  <PopoverContent
                    color="white"
                    bg="blue.800"
                    borderColor="blue.800"
                  >
                    <PopoverHeader px={135} fontWeight="bold" border="0">
                      LOGIN
                    </PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Input
                        placeholder="Enter your email"
                        size="md"
                        name="email"
                        onChange={onchange}
                        value={email}
                      />
                      <InputGroup size="md">
                        <Input
                          mt={2}
                          pr="4.5rem"
                          type={show ? "text" : "password"}
                          placeholder="Enter password"
                          onChange={onchange}
                          value={pass}
                          name="pass"
                        />
                        <InputRightElement width="4.5rem">
                          <Button
                            bg={"none"}
                            mt={4}
                            h="1.75rem"
                            size="sm"
                            onClick={handleClick}
                          >
                            {show ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </PopoverBody>
                    <PopoverFooter
                      border="0"
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      pb={4}
                    >
                      <ButtonGroup size="sm">
                        <Button onClick={reconsider} colorScheme="green">
                          Login
                        </Button>
                      </ButtonGroup>
                    </PopoverFooter>
                  </PopoverContent>
                </Popover>
              )}
            </Box>
          </Box>
        </Box>
        {<Examplerh />}
      </Flex>

      </Box>
    </>
  );
};
