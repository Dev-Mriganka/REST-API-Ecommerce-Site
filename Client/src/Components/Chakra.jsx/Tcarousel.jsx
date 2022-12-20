import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import {Box, Image, Text} from "@chakra-ui/react";
const Tcarousel = ({items}) => {
  return (
    <div className="Carousel">
      <Carousel
        autoPlay={true}
        centerSlidePercentage={100}
        centerMode
        infiniteLoop
        swipeable
        showArrows={true}
        showStatus={false}
        emulateTouch
        thumbWidth={100}
        interval={2000}
        transitionTime={500}
        width={300}
        useKeyboardArrows
        stopOnHover
        showThumbs={false}
      >
        {items?.map((item,i) => (
          <div 
            style={{
              margin: "9px",
              height: "480px",
              background: "white",
              color: "black",
              fontFamily: "cursive",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
            key={i}
          >
            <Image src={item.img} alt="" />
            <Text>{item.brand}</Text>
            <Box
              fontSize={"13px"}
              display={"flex"}
              flexDirection="column"
              gap={"4px"}
              fontFamily="monospace"
            >
              <Text>{item.name}</Text>
              <Text as={"del"}>{item.price}</Text>
              <Text>{item.discount}</Text>
              <Text>{item.rprice}</Text>
            </Box>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Tcarousel;
