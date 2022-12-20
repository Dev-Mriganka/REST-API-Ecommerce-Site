import {Box, Heading, SimpleGrid} from "@chakra-ui/react";
import React from "react";
import Scarousel from "../Chakra.jsx/Scarousel";
import {carousel} from "../Data/carousel";

const Three = () => {
  return (
    <Box mb={"5"}>
      <Box
        w={"94%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box display={"flex"} flexDirection={"column"}>
          <Heading fontWeight={500} pl={2} fontFamily={"monospace"}>
            New{" "}
          </Heading>
          <Heading
            fontWeight={500}
            fontFamily={"monospace"}
            textDecorationStyle="double"
            textAlign={"center"}
            textDecorationLine={"underline"}
          >
            Arrivals
          </Heading>{" "}
        </Box>
        <Scarousel items={carousel} />
      </Box>
    </Box>
  );
};

export default Three;
