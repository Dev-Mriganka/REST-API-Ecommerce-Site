import React from 'react'
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaTiktok,
  FaTabletAlt,
} from "react-icons/fa";
export default function Contactbar() {
    let isAuth = true;
  return (
    <div>
      <Box
        w="58%"
        h="70px"
        m="auto"
        bgGradient="linear(to-t, green.200, pink.500)"
        bg={"whitesmoke"}
        fontSize={25.5}
        fontWeight={"555"}
        fontFamily={"Montserrat,sans-serif"}
        display="flex"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <div style={{ display: "flex", columnGap: "10px" }}>
          <div style={{ fontSize: "14px" }}>CONNECT WITH US</div>
          <a
            href="https://www.facebook.com/yoox"
            target="_blank"
            rel="noopener noreferrer"
          >
            {FaFacebookF()}
          </a>
          <a
            href="https://twitter.com/yoox"
            target="_blank"
            rel="noopener noreferrer"
          >
            {FaTwitter()}
          </a>
          <a
            href="https://www.instagram.com/yoox/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {FaInstagram()}
          </a>
          <a
            href="https://www.youtube.com/yoox"
            target="_blank"
            rel="noopener noreferrer"
          >
            {FaYoutube()}
          </a>
          <a
            href="https://www.pinterest.com/yoox/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {FaPinterestP()}
          </a>
          <a
            href="https://www.tiktok.com/@yoox"
            target="_blank"
            rel="noopener noreferrer"
          >
            {FaTiktok()}
          </a>
        </div>
        <div style={{ display: "flex", columnGap: "10px" }}>
          <a
            href="https://www.yoox.com/us/project/mobile_apps?"
            target="_blank"
            rel="noopener noreferrer"
          >
            {FaTabletAlt()}
          </a>
          <a
            href="https://www.yoox.com/us/project/mobile_apps?"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "14px" }}
          >
            DOWNLOAD THE APP FOR iOS / ANDROID
          </a>
        </div>
      </Box>
      <hr border={"1px solid #c7c1c1"} />
    </div>
  );
}
