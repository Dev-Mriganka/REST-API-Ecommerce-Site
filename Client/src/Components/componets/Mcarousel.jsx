import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Link, useNavigate} from "react-router-dom";
export default function MyCarousel({items}) {
  const nav = useNavigate();
  return (
    <div className="Carousel">
      <Carousel
        autoPlay={true}
        centerSlidePercentage={100}
        infiniteLoop
        swipeable
        showArrows={true}
        showStatus={false}
        emulateTouch
        thumbWidth={100}
        interval={3000}
        transitionTime={600}
        useKeyboardArrows
        stopOnHover
        showThumbs={false}
      >
        {items.map((item) => (
          <div
            id="carouselLink"
            onClick={() => nav(`${item.link}`)}
            key={item.image}
          >
            <img
              style={{height: "637px"}}
              src={item.image}
              alt="_shivam"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
