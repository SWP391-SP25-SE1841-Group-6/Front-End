import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";
import { useEffect } from "react";
import logo from "../../assets/Images/logo.jpg"

const SlickCarousel = () => {
    useEffect(() => {
        console.log($); // Should not be undefined
        $('.single-item').slick();
      }, []);
      

  return (
    <div className="single-item">
      <div><img src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60" alt="1" /></div>
      <div><img src="image2.jpg" alt="2" /></div>
      <div><img src="image3.jpg" alt="3" /></div>
    </div>
  );
};

export default SlickCarousel;
