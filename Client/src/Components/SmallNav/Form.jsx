import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { Button, Input, Radio,RadioGroup,Stack, Text, useToast } from "@chakra-ui/react";
import "./footer.css"
import { useNavigate } from 'react-router-dom';
export default function Form() {
  const [state, setState] = useState(false)
  const toast = useToast();
  // const navigate=useNavigate()
  const trigger = () => {
 toast({
   title: "You'll get updates on email",
   status: "success",
   position: "top",
   duration: 2000,
   isClosable: true,
 });
    // navigate("/home/women")
  }

  return (
    <>
      <div>
        {" "}
          <div className="formF">
            <div
              style={{
                fontWeight: "bolder",
                fontFamily: "cursive",
                fontSize: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                justifySelf: "center",
                alignContent: "center",
              }}
            >
              <span style={{ padding: "0 40%", fontSize: "35px" }}>
                {MdOutlineEmail()}
              </span>
              YOOX NEWS
            </div>
            <p style={{ fontSize: "12px" }}>
              Sign up for the newsletter and discover the latest arrivals and
              promotions
            </p>
            <Input type="text" pr={1} placeholder="Insert Your Email Address" />
            <RadioGroup
              display={"flex"}
              justifyContent={"center"}
              defaultValue="1"
            >
              <Stack spacing={5} direction="row">
                <Radio colorScheme={"blue"} value="1">
                  <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                    WOMEN
                  </span>
                </Radio>
                <Radio colorScheme="blue" value="2">
                  <span style={{ fontSize: "15px", fontWeight: "bold" }}>MEN</span>
                </Radio>
              </Stack>
            </RadioGroup>
            <div
              style={{
                fontSize: "11px",
                display: "flex",
                // flexDirection:"column",
                width: "200px",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <input className="lopmo" type="checkbox" name="" id="" />
              <Text w={600}>
                I consent to receive YOOX newsletters via email. For further
                information, please consult the Privacy Policy.
              </Text>
            </div>
            <Button
              onClick={trigger}
              // as={a}
              // href="mailto:shivammoudgil358@gmail.com"
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "15px 5px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Submit
            </Button>
          </div>
      </div>
    </>
  );
}
