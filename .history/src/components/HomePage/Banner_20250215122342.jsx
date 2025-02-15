import , { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  useEffect(() => {
    $('.single-item').slick();  // Khởi tạo slick khi component render
  }, []);

  return (
    <div className="single-item">
      <div><img src="image1.jpg" alt="1" /></div>
      <div><img src="image2.jpg" alt="2" /></div>
      <div><img src="image3.jpg" alt="3" /></div>
    </div>
  );
};

export default Banner;
