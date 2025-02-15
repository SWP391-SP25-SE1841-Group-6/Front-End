import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../assets/Images/logo.jpg";
import l1 from "../../assets/Images/tvtl.jpg";

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    setTimeout(() => {
        SlickCarousel   
    }, 1000);
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={logo} alt="1" />
      </div>
      <div>
        <img src={l1} alt="2" />
      </div>
      <div>
        <img src={logo} alt="3" />
      </div>
    </Slider>
  );
};

export default SlickCarousel;