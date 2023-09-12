import "./Carousel.css";
import hiker from "../assets/images/hiker.jpg";
import snow from "../assets/images/snow-hiker.jpg";
import sunrise from "../assets/images/sunrise.jpg";
import everest from "../assets/images/everest.jpg";
import { useState, useEffect } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Carousel = () => {
  const images = [hiker, snow, everest, sunrise];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  useEffect(() => {
    let next = (current + 1) % images.length;
    let id = setTimeout(() => setCurrent(next), 3000);
    return () => clearTimeout(id);
  }, [current]);

  return (
    <div className="carousel">
      <AiOutlineLeft
        className="left-arrow"
        onClick={() => {
          prevSlide();
        }}
      />
      <img src={images[current]} alt="" className="carousel-img" />
      <AiOutlineRight
        className="right-arrow"
        onClick={() => {
          nextSlide();
        }}
      />
    </div>
  );
};

export default Carousel;
