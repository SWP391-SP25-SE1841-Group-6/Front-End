import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";
import { useEffect } from "react";
import logo from "../../assets/Images/logo.jpg"
import l1 from "../../assets/Images/tvtl.jpg"
const SlickCarousel = () => {
    useEffect(() => {
        console.log($); // Should not be undefined
        $('.single-item').slick();
      }, []);
      

  return (
    <div className="single-item">
      <div><img src={logo} alt="1" /></div>
      <div><img src={l1} alt="2" /></div>
      <div><img src={logo} alt="3" /></div>
    </div>
  );
};

export default SlickCarousel;
