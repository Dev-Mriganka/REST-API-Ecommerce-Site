import {Center, Box} from "@chakra-ui/react";
import React from "react";
// import { designer } from "../Data/designer";
const SmFooter = () => {
//   {
//     designer.map((el) => {
//   console.log(el.Designers)
// })}
  return (
    <>
      <div style={{
        borderTop: " 8px dashed", marginTop:'25px'}}>
        <Box bg={"black"} p={6} >
          <Center color={"gray"} fontSize={12} fontWeight={"bold"}>
            Powered by YOOX NET-A-PORTER GROUP - Copyright © 2000-2022 YOOX
            NET-A-PORTER GROUP S.p.A. - All Rights Reserved - SIAE Licence #
            401/I/526{" "}
          </Center>
          <Center textColor={"gray"} fontSize={13} fontWeight={"600"}>
            Legal Area / Privacy Policy
          </Center>
        </Box>
      </div>
    </>
  );
};

export default SmFooter;
