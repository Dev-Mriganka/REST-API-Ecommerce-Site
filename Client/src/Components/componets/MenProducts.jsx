import React, {useContext, useState} from "react";

// import TwoImage from './smallComp.jsx/TwoImages'
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  HStack,
  IconButton,
  SimpleGrid,
  Spacer,
  Spinner,
  Stack,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import Navbar from "../SmallNav/Navbarmain"
import Footertop from "../SmallNav/Footertop"

import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons";
import {useEffect} from "react";
import {AppContext} from "../AppContext/AppContext";
import ProductCard from "./ProductCard";


const MenProducts = () => {
  const {state} = useContext(AppContext);

  const [mendata, setmenData] = useState([]);

  // is Loading   //
  

  useEffect(() => {
    setmenData(state.men.AllProductsData.menData);
  }, [mendata]);

  const PriceSortlow = () => {
    const SortedData = state.men.AllProductsData.menData.sort(function (a, b) {
      return (a.rprice - b.rprice);
    });

    setmenData([...SortedData]);
  };

  const PriceSorthigh = () => {
    const SortedData = state.men.AllProductsData.menData.sort(function (a, b) {
      return b.rprice - a.rprice;
    });

    setmenData([SortedData]);
  };


  
  console.log(mendata)

  return (
    <>
      <Navbar />
      <Text color="gray.500" fontWeight="bold">
        {" "}
        HOME / MEN / PRODUCTS{" "}
      </Text>

      <Stack style={{marginTop: "80px"}} mb={55}>
        <Box
          display="flex"
          width="80%"
          margin="auto"
          justifyContent="space-around"
        >
          <img
            src="https://www.yoox.com/images/yoox80/banners/6825_1_Montblanc_WM_TOPna_sx.jpg?634485886601286852"
            alt=""
          />
          <img
            src="https://www.yoox.com/images/yoox80/banners/5351_1_8byooxFW22_TOPNA_UK.jpg?634485886601286852"
            alt=""
          />
        </Box>

        <Wrap justify="center" style={{margin: "auto", marginTop: "20px"}}>
          <Divider orientation="horizontal" />

          <VStack>
            <Text align="center" fontSize="20" fontWeight="bold">
              Men Clothing(8803)
            </Text>

            <ButtonGroup size="sm" isAttached variant="outline">
              <IconButton
                onClick={PriceSortlow}
                aria-label="Add to friends"
                icon={<ChevronDownIcon boxSize={8} />}
              />
              <Button fontSize={18}>SORT BY PRICE</Button>
              <IconButton
                onClick={PriceSorthigh}
                aria-label="Add to friends"
                icon={<ChevronUpIcon boxSize={8} />}
              />
            </ButtonGroup>

            <HStack width="1200px">
            </HStack>
          </VStack>

          <HStack spacing={50} width="1200px" justify="stretch">
            {/* SIDEBAR */}
            {/* <ProductsSidebar   /> */}

            {/* PRODUCTS */}

            <SimpleGrid spacing={5} columns={3}>
              {mendata.map((el) => {
                return <ProductCard {...el} />;
              })}
            </SimpleGrid>
          </HStack>
        </Wrap>
      </Stack>
      <Footertop />
    </>
  );
};

export default MenProducts;
