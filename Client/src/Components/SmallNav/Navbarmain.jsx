import React from "react";
import Nav2 from "./Nav2";
import Nav3 from "./Nav3";
export default function Navbar() {
  return (
    <div
      style={{
        position: "fixed",
        width:"100%",
        zIndex: "15",
      }}
    >
      <Nav2></Nav2>
      <Nav3></Nav3>
    </div>
  );
}
