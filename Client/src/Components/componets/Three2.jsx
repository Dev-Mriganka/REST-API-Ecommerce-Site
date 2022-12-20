import {Box, Heading, SimpleGrid} from "@chakra-ui/react";
import React from "react";
import Scarousel from "../Chakra.jsx/Scarousel";
import {carousel2} from "../Data/carousel";

const Three2 = () => {
  return (
    <Box mb={"5%"}>
      <Box
        w={"94%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box display={"flex"} flexDirection={"column"}>
          <Heading
            fontWeight={500}
            fontSize={"32px"}
            mb="2"
            fontFamily={"monospace"}
          >
            ONE OF A KIND{" "}
          </Heading>
          <Heading
            fontSize={"25px"}
            fontWeight={500}
            // fontFamily={"initial"}
                      textDecorationStyle="double"
                    textDecorationColor={ "deepskyblue"}
                      textStyle={"3D"}
            // textAlign={"center"}
            textDecorationLine={"underline"}
          >
            VIEW ALL
          </Heading>{" "}
        </Box>
        <Scarousel items={carousel2} />
      </Box>
    </Box>
  );
};

export default Three2;
