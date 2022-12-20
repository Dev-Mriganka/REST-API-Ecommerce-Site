import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react'

const Smbox = ({ left ,bottom,text,line}) => {
    return (
      <Box
        pos={"relative"}
        left={left}
        w={400}
        bottom={bottom}
        p="4"
        color={"black"}
        h={"8rem"}
        bg={"white"}
      >
        <Heading
          fontWeight={"semibold"}
          fontFamily={"cursive"}
        >
          {text}
        </Heading>
        <Text fontSize={"14px"} fontFamily={"mono"}>
          {line}
        </Text>
      </Box>
    );
}

export default Smbox
