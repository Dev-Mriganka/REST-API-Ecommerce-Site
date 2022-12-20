import { Box, Center, Image } from '@chakra-ui/react';
import React from 'react'
import Five from '../componets/Five';
import Four from '../componets/Four';
import MyCarousel from '../componets/Mcarousel'
import Smbox from '../componets/Smbox';
import Three from '../componets/Three';
import Three2 from '../componets/Three2';
import Two from '../componets/Two';
import Footertop from '../SmallNav/FooterTop';
import Navbar from '../SmallNav/Navbarmain';

const banner = [
  {
    image:
      "https://www.yoox.com/images/yoox80/banners/6824_1_NewArrivals_MW_Main.jpg?634485886869569819#width=1378&height=637",
    link: "/",
  },
  {
    image:
      "https://www.yoox.com/images/yoox80/banners/5460_1_Myar_main.jpg?634485886869569819#width=1380&height=637",
    link: "/",
  },
  {
    image:
      "https://www.yoox.com/images/yoox80/banners/6821_2_ShoesACC_MAIN_K.jpg?634485886869569819#width=1378&height=637",
    link: "/",
  },
];

const last = [
  {
    image:
      "https://www.yoox.com/images/yoox80/banners/6824_3_NewArrivals_M_Bottom.jpg?634485886869569819#width=690&height=637",
  },
  {
    image:
      "https://www.yoox.com/images/yoox80/banners/6895_3_GenZ_MW_Bottom.jpg?634485886869569819#width=690&height=637",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <Box mt={"-44px"}>
        <Center
          pos={"relative"}
          fontSize={"15px"}
          fontWeight="bolder"
          top={"55"}
          letterSpacing={2}
          display={"flex"}
          flexDirection={"column"}
        >
          THE BIGGEST SALE EVER: UP TO 95% OFF <br />
          <Center> Ends 10/1</Center>
        </Center>
        <Box w={"95%"} margin="auto" display={"flex"}>
          <Image
            w={"full"}
            m={"auto"}
            src="https://www.yoox.com/images/yoox80/banners/6950_3_Premium_DM.png?634485886869569819#width=1378&height=67"
          />
        </Box>
        <Box w={"95%"} m={"auto"}>
          <MyCarousel items={banner} />
          <Two />
        </Box>
      </Box>
      <Box mt={"-29%"}>
        <Image
          src={
            "https://secure.social.yoox.it/yspecial/8BYYOOX/SUBHOME/SEPT-22/defhouse_v2.jpg "
          }
        />
      </Box>
      <Box mt={16} mb={20}>
        <Three />
      </Box>
      <Box>
        <Four />
      </Box>
      <Box mt={1}>
        <Three2 />
      </Box>
      <Box>
        <Five />
      </Box>
      <Box display={"flex"} m="auto" mt={20} mb={10} w={"90%"}>
        {last.map((el, i) => (
          <Image key={i} src={el.image} />
        ))}
      </Box>
      <Box>
        <Smbox
          left={"105px"}
          bottom={"190px"}
          text={"NEW & NOW"}
          line={"Check out the latest arrivals"}
        />
        <Smbox
          left={"67%"}
          bottom={"320px"}
          line={"Manga,Pop,Vibes....."}
          text={"Woke up in Japan"}
        />
      </Box>
      <Box mt={-44}>
        <Footertop />
      </Box>
    </>
  );
}

export default Home
