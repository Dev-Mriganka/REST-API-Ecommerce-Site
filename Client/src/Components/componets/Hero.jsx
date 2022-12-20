// Import css files
import Slider from "react-slick";
// import { SampleNextArrow, SamplePrevArrow } from "./carousalComponent/ArrowMain";
import "./Hero.css"
import sl1 from "../img/sli1f.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";;

const Hero = ({data}) => {
  const settings = {
    infinite: true,
    speed: 500,
    lazyLoad: "ondemand",
    slidesToShow: 5,
    slidesToScroll: 5,
    // nextArrow: true
  
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
          ],
        };

    const EntertainmentImage = [
      sl1,
      sl1,
      sl1,
      sl1,
      sl1,
      sl1,
      sl1,
      sl1,
      sl1
      
      
    ];
  
    
  return (
    <Slider  {...settings} className="poc">
      {data.map((item,i) => {
        return (
            <div key={i} style={{display:"flex",alignItems:"flex-start",flexDirection:"column",borderBottom:"none",height:"340px",background:"lightblue",padding:5,gap:10}} >
            <img  src={item.img[0]} alt="" style={{margin:"auto", width: "200px" }} />
            <p style={{ fontSize: "12px" ,fontWeight: "700" }}>{item.name}</p>
            <p style={{ fontSize: "11px", fontWeight: "500" }}>us$ {item.finalPrice}</p>
          </div>
       );
      })}
    </Slider>
  );
}

export default Hero;