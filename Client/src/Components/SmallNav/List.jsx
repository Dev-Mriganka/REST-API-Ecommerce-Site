import React from 'react'
import "./footer.css";
export default function List({data}) {

  return (
    <div className="flexdiv flexdirC" style={{  width: "130px", fontSize: "13px",fontWeight:"450",rowGap:"10px", fontFamily:"revert-layer"}}>
      {data.map((e,i) => (
        <span key={i}>{e}</span>
      ))}
    </div>
  );
}
