import {Box, Heading, Image, Text} from "@chakra-ui/react";
import React from "react";
import Tcarousel from "../Chakra.jsx/Tcarousel";
import {carousel3} from "../Data/carousel";
import "./Css/Five.css";
const Five = () => {
  return (
    <div
      style={{display: "flex", alignItems: "center", justifyContent: "center"}}
    >
      <Box
        pos={"relative"}
        left="265px"
        w={400}
        top="259px"
        p="4"
        color={"black"}
        h={"8rem"}
        bg={"white"}
      >
        <Heading fontWeight={"semibold"} fontFamily={"cursive"}>
          2 COOL 4…
        </Heading>
        <Text fontSize={"12px"} fontFamily={"mono"}>
          Discover the FW 22-23 collection from 8 by YOOX{" "}
        </Text>
      </Box>
      <Box ml={"-36"}>
        <Image
          src="https://www.yoox.com/images/yoox80/banners/6833_2_8byYoox_Special_WM.jpg?634485886869569819#width=930&height=660"
          alt=""
        />
      </Box>
      <Box pos={"relative"} right="40">
        <Tcarousel items={carousel3} />
      </Box>
    </div>
  );
};

export default Five;
