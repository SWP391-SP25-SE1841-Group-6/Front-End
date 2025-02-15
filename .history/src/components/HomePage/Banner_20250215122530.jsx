import { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  useEffect(() => {
    $('.single-item').slick();  // Khởi tạo slick khi component render
  }, []);

  return (
    <div className="single-item">
      <div><img src= "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60" alt="1" /></div>
      <div><img src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60" alt="2" /></div>
      <div><img src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60" alt="3" /></div>
    </div>
  );
};

export default Banner;
