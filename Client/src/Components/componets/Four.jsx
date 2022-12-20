import { Heading } from '@chakra-ui/react';
import React from 'react'
import "./Css/Four.css";
const Four = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
        }}
        className="threeF"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            gap: "10px",
          }}
        >
          <img
            src="https://www.yoox.com/images/yoox80/banners/6825_2_Vans_Tris_WM.jpg?634485886869569819#width=473&height=660"
            alt=""
          />
          <Heading>VANS</Heading>
          <p>Iconic models and details</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <img
            src="https://www.yoox.com/images/yoox80/banners/6825_8_Adidas_W_Tris.jpg?634485886869569819#width=473&height=660"
            alt=""
          />
          <Heading>ADIDAS NMD_V3</Heading>
          <p>Create new paths</p>
        </div>
        <div
          style={{
            width: "400px",
            gap: "10px",
            display: "flex",
            flexDirection:"column"
          }}
        >
          <img
            src="https://www.yoox.com/images/yoox80/banners/6825_17_PoloRalphLauren_W_Tris.jpg?634485886869569819#width=430&height=600"
            alt=""
          />
          <Heading>POLO RALPH LAUREN</Heading>
          <p>The new Fall22 collection</p>
        </div>
      </div>
    </div>
  );
}

export default Four
