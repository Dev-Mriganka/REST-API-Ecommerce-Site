import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Toast,
  useToast,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext/AppContext";
// import { SmNavbar } from "../SmallNav/Navbar";
// import SmFooter from "../SmallNav/SmFooter";

const MainP = () => {
  const { state } = useContext(AppContext);
  const navigate = useNavigate()
  const toast=useToast()
  const trigger = () => {
  //  console.log(state.authLogin)
    if (!state.authLogin) {
        toast({
          title: "Login first",
          description: "If you don't have an account register first",
          status: "info",
          position:"top",
          duration: 2000,
          isClosable: true,
        });
    //  navigate("/register")
    }
    // console.log(state.authLogin)
  }
  return (
    <>
      {/* <SmNavbar/> */}
      <Center mt={4}>
        <Image
          w={"200px"}
          src="https://www.yoox.com/media/yoox16/header/yoox-logo-p.svg"
        />
        {/* <Heading fontFamily={"inherit"} fontWeight={"340"} fontSize={"4rem"}>
          YOOX
        </Heading> */}
      </Center>
      <Center>
        <Text fontWeight={500}>SHOP FASHION / DESIGN+ART </Text>
      </Center>
      <Center mt={2}>
        <Grid onClick={trigger}>
          <SimpleGrid w={"6xl"} columns={4} columnGap={4}>
            <Link to="/home/women">
              <GridItem>
                <Image
                  src="https://www.yoox.com/images/yoox80/banners/5569_24_splash_W.jpg?634485886869569819"
                  alt="Women"
                />
                <Box
                  p={8}
                  textAlign={"center"}
                  bg={"blackAlpha.800"}
                  fontWeight={"bold"}
                  color={"white"}
                >
                  Women
                </Box>
                <Text
                  mt={2}
                  fontSize={13}
                  fontWeight={"bolder"}
                  textAlign={"center"}
                >
                  [VIEW MORE]
                </Text>
              </GridItem>
            </Link>
            <Link to="/home/men">
              <GridItem>
                {" "}
                <Image
                  src="https://www.yoox.com/images/yoox80/banners/5569_23_splash_M.jpg?634485886869569819"
                  alt="Men"
                />
                <Box
                  p={8}
                  textAlign={"center"}
                  bg={"blackAlpha.800"}
                  fontWeight={"bold"}
                  color={"white"}
                >
                  Men
                </Box>
                <Text
                  mt={2}
                  fontSize={13}
                  fontWeight={"bolder"}
                  textAlign={"center"}
                >
                  [VIEW MORE]
                </Text>
              </GridItem>
            </Link>
            <Link to="/home/kids">
              <GridItem>
                {" "}
                <Image
                  src="https://www.yoox.com/images/yoox80/banners/5569_18_splash_K.jpg?634485886869569819"
                  alt="Kids"
                />
                <Box
                  p={8}
                  textAlign={"center"}
                  bg={"blackAlpha.800"}
                  fontWeight={"bold"}
                  color={"white"}
                >
                  Kids
                </Box>
                <Text
                  mt={2}
                  fontSize={13}
                  fontWeight={"bolder"}
                  textAlign={"center"}
                >
                  [VIEW MORE]
                </Text>
              </GridItem>
            </Link>
            <Link to="/home/arts&design">
              <GridItem>
                {" "}
                <Image
                  src="https://www.yoox.com/images/yoox80/banners/5569_16_splash_D.jpg?634485886869569819"
                  alt="Arts"
                />
                <Box
                  p={8}
                  textAlign={"center"}
                  bg={"blackAlpha.800"}
                  fontWeight={"bold"}
                  color={"white"}
                >
                  Arts & Design
                </Box>
                <Text
                  mt={2}
                  fontSize={13}
                  fontWeight={"bolder"}
                  textAlign={"center"}
                >
                  [VIEW MORE]
                </Text>
              </GridItem>
            </Link>
          </SimpleGrid>
        </Grid>
      </Center>
    </>
  );
};

export default MainP;
