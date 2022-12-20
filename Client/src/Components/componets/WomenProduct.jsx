import React, {useEffect, useState} from "react";
import {
    Box,
  Button,
  ButtonGroup,
  Divider,
  HStack,
  IconButton,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons";
import { Wproducts } from "../Data/viewAll";
import WProductCard from "../Chakra.jsx/WProductCard";
import Catagories from "../Chakra.jsx/Categories";
import Navbar from "../SmallNav/Navbarmain";

const WomenProducts = () => {
   const [data,setData]=useState([])

  // is Loading   //
  const [isLoading, setIsLoading] = useState(true);

    // console.log(Wproducts)
    
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);
    
    useEffect(() => {
        setData(Wproducts)
 },[data])
    // console.log(data)

  const PriceSortlow = () => {
    const SortedData = Wproducts.sort(function (a, b) {
      return (
        a.rprice.replace(/[^0-9\-]/g, "") - b.rprice.replace(/[^0-9\-]/g, "")
      );
    });
          setData([...SortedData]);
    };
    
  
  const PriceSorthigh = () => {
    const SortedData = Wproducts.sort(function (a, b) {
      return (
        b.rprice.replace(/[^0-9\-]/g, "") - a.rprice.replace(/[^0-9\-]/g, "")
      );
    });

    setData([...SortedData]);
  };

  //  if(isLoading){

  //   return (
  //      <Loading />
  //     )

  //  }

    return (
      <>
        <Navbar />
        <Text textAlign={"center"} color="gray.500" fontWeight="bold">
          {" "}
          HOME / WOMEN / PRODUCTS{" "}
        </Text>

        <Stack style={{marginTop: "10px"}}>
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
                (4600+)ITEMS
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
                <Text color="gray.500" fontWeight="bold">
                  {" "}
                  FILTER{" "}
                </Text>{" "}
                <Spacer />
                <Text color="gray.500" fontWeight="bold">
                  {" "}
                  CLEAR ALL
                </Text>
              </HStack>
            </VStack>

            <HStack spacing={190} display="flex">
              {/* SIDEBAR */}
              <Box  pos={"absolute"} top={"28rem"} left={"5rem"}>
                {" "}
                <Catagories />
              </Box>

              {/* PRODUCTS */}

              <SimpleGrid spacing={20} columns={3}>
                {data.map((el, i) => {
                  return (
                    <div key={i}>
                      <WProductCard
                        id={i + 1}
                        {...el}
                        rprice={el.rprice.replace(".", "")}
                        price={el.price.replace(".", "")}
                      />
                    </div>
                  );
                })}
              </SimpleGrid>
            </HStack>
          </Wrap>
        </Stack>
      </>
    );
};

export default WomenProducts;
