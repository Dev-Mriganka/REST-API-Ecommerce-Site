import React from "react";
import List from "./List";
import "./footer.css";
import Form from "./Form";
export default function Footertop() {
  const firstL = [
    "Shopping guide",
    "iPhone/ iPad/ Android",
    "Browse all Designers",
    "Browse all Categories",
  ];
  const SecondL = [
    "Shipping times & costs",
    "Payments and web security",
    "Product quality",
    "Track your order",
    "Returns & refunds",
    "FAQs",
    "Size Guide",
  ];
  const ThirdL = ["Home", "My Orders", "My Details", "Dream Box", "Première"];
  const FourthL = ["Company Info", "Press", "Affiliation", "Careers"];
  return (
    <div className="listdata">
      <div className="flexdiv flexdirC">
        <h2 style={{fontWeight: "bold"}}>NEW TO YOOX</h2>
        <List data={firstL} />
      </div>
      <div className="flexdiv flexdirC">
        <h2 style={{fontWeight: "bold"}}>HELP</h2>
        <List data={SecondL} />
      </div>
      <Form></Form>
      <div className="flexdiv flexdirC">
        <h2 style={{fontWeight: "bold"}}>MYOOX</h2>
        <List data={ThirdL} />
      </div>
      <div className="flexdiv flexdirC">
        <h2 style={{fontWeight: "bold"}}>ABOUT US</h2>
        <List data={FourthL} />
      </div>
    </div>
  );
}
