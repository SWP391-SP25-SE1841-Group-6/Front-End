import "../../App.css";
import Footer from "../Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faGraduationCap,
  faHeadphones,
  faHeart,
  faMagnifyingGlass,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";

// const images = [
//   {
//     src: "https://tamlyvietphap.vn/wp-content/uploads/2025/01/dichvutamlydoanhnghiep-300x168.png",
//   },
//   {
//     src: "https://tamlyvietphap.vn/wp-content/uploads/2025/01/dichvuthamvantamly-300x168.png",
//   },
//   {
//     src: "https://tamlyvietphap.vn/wp-content/uploads/2025/01/dichvutamlydoanhnghiep-300x168.png",
//   },
//   {
//     src:"https://images.unsplash.com/photo-1620389701363-b1d7a601e0c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fFBzeWNob2xvZ2ljYWwlMjBIZWFsdGh8ZW58MHx8MHx8fDA%3D"

//   },
// ];

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 3000,
//   slidesToShow:1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 5000,
// };
const Banner = () => {
  return (
    <div className="banner flex flex-col gap-20">
      {/* Hero Banner Section */}
      <div className="hero-banner w-full px-8 py-4">
        <div className="w-full flex justify-center">
          <div className="relative border border-amber-200 rounded-2xl w-full max-h-[500px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1620389701363-b1d7a601e0c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fFBzeWNob2xvZ2ljYWwlMjBIZWFsdGh8ZW58MHx8MHx8fDA%3D"
              alt="Hero Banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-us px-8 py-4">
        <div className="flex flex-wrap gap-8">
          <div className="flex-1 min-w-[300px]">
            <div className="mb-8">
              <h3 className="font-bold text-red-500">Giới Thiệu</h3>
              <p className="text-2xl text-sky-900 font-bold">VỀ CHÚNG TÔI</p>
              <span className="text-2xl block mt-4">
                Viện Tâm lý GROUP6 được thành lập theo Giấy chứng nhận
                Doanh nghiệp Khoa học công nghệ số B-16/2019ĐK-KHCN
                ngày 05/06/2019 của Sở KH&CN thành phố Hồ Chí Minh.
              </span>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="text-7xl text-red-600">
                  <FontAwesomeIcon icon={faFire} />
                </div>
                <div>
                  <h4 className="text-red-500 font-bold mb-2">Lĩnh vực hoạt động</h4>
                  <p className="text-xl">
                    Viện Tâm lý GROUP6 hoạt động trong các lĩnh vực:
                    <br />-Nghiên cứu tâm lý
                    <br />-Đào tạo chuyên gia
                    <br />-Cung cấp dịch vụ trị liệu tâm lý
                    <br />-Hướng đến nâng cao sức khỏe tinh thần tại Việt Nam
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="text-7xl text-blue-700">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div>
                  <h4 className="text-blue-500 font-bold mb-2">Giá trị cốt lõi</h4>
                  <p className="text-xl">
                    -Bảo mật
                    <br />–Tận tâm
                    <br />–Chuyên nghiệp
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-[300px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1661308281704-f5b562260e1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHN5Y2hvbG9naWNhbCUyMGNvbnN1bHRhbnR8ZW58MHx8MHx8fDA%3D"
              alt="About Us"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="services-grid px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-sky-900 text-white p-8 rounded-lg">
            <p className="text-2xl">
              School Psychology Advice Group6 là trung tâm cung cấp mọi dịch vụ, hỗ trợ tư vấn tâm lí
            </p>
            <img
              src="https://vinschool.edu.vn/wp-content/uploads/2019/06/ic-03.svg"
              alt="Service Icon"
              className="mt-4 h-16"
            />
          </div>

          <div className="bg-sky-700 text-white p-8 rounded-lg">
            <h4 className="text-2xl mb-4">
              Lộ trình học tập
              <span className="block">cá nhân hoá, dành riêng cho mỗi học sinh</span>
            </h4>
            <FontAwesomeIcon icon={faGraduationCap} className="text-6xl" />
          </div>

          <div className="bg-sky-800 text-white p-8 rounded-lg">
            <h4 className="text-2xl mb-4">Đào tạo thế hệ Việt Nam</h4>
            <p>
              với tư duy công dân toàn cầu, kỹ năng học tập suốt đời và
              khát khao kiến tạo tương lai
            </p>
            <img
              src="https://vinschool.edu.vn/wp-content/uploads/2019/06/ic-02-1.svg"
              alt="Education Icon"
              className="mt-4 h-12"
            />
          </div>

          <div className="overflow-hidden rounded-lg h-[300px]">
            <img
              src="https://tamlyvietphap.vn/wp-content/uploads/2025/01/benh-tam-than-co-chua-khoi-duoc-khong_1609132017.jpg"
              className="w-full h-full object-cover transform transition-all duration-300 ease-in-out hover:scale-105"
              alt="Mental Health"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services px-8 py-4">
        <h4 className="text-center text-2xl font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-500 py-3 px-6 rounded-full max-w-[500px] mx-auto mb-12">
          DỊCH VỤ HỖ TRỢ TÂM LÍ
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service Cards */}
          <div className="p-6 border rounded-lg">
            <h4 className="text-xl font-bold text-center mb-4">
              Dịch Vụ Tham Vấn - Trị Liệu Tâm Lý
            </h4>
            <p className="text-lg">
              Ngạn ngữ có câu: "Hạnh phúc không phải là không có rắc rối mà
              là có khả năng ứng phó với chúng." Ai trong chúng ta đều ít
              nhất đã một lần đối mặt với những khó khăn, rắc rối...
            </p>
          </div>

          <div className="overflow-hidden rounded-lg h-[300px]">
            <img
              src="https://t3.ftcdn.net/jpg/01/19/15/04/360_F_119150418_kCJtuuSgoEHdWUslrHAPdVBj8B0xvfjV.jpg"
              alt="Counseling"
              className="w-full h-full object-cover transform transition-all duration-300 ease-in-out hover:scale-105"
            />
          </div>

          {/* Continue with other service cards... */}
        </div>
      </div>

      {/* Programs Section */}
      <div className="programs px-8 py-4">
        <h4 className="text-center text-2xl font-bold text-white bg-gradient-to-r from-orange-300 to-red-500 py-3 px-6 rounded-full max-w-[500px] mx-auto mb-12">
          CHƯƠNG TRÌNH NGOẠI KHÓA
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Program Cards */}
          <div className="relative rounded-lg overflow-hidden h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1560439514-07abbb294a86"
              alt="Program 1"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end">
              <h5 className="text-xl font-bold text-red-400 mb-4">
                CHUỖI HỘI THẢO & TALKSHOW
              </h5>
              <div className="text-white">
                <p>
                  Đa dạng chủ đề liên quan đến tâm lí học đường.
                  <br />
                  <strong>Khách mời:</strong> Chuyên gia tâm lý học đường...
                </p>
              </div>
            </div>
          </div>

          {/* Continue with other program cards... */}
        </div>
      </div>

      {/* Blog Section */}
      <div className="blog px-8 py-4">
        <h3 className="text-center text-2xl font-bold text-red-600 mb-12">BLOG CHIA SẺ</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Blog Cards */}
          <div className="relative rounded-lg overflow-hidden h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1559677437-62c20d42dd27"
              alt="Blog 1"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 p-6 flex flex-col items-center">
              <img
                src="https://thumbs.dreamstime.com/b/mot-happiness-141984449.jpg"
                className="rounded-full w-32 h-32 object-cover mb-4"
                alt="Happiness"
              />
              <h4 className="text-xl font-bold text-blue-300 text-center mb-4">
                Làm Thế Nào Để Trở Nên Hạnh Phúc Hơn
              </h4>
              <div className="w-16 h-0.5 bg-gray-400 mb-4"></div>
              <p className="text-white text-center">
                Hạnh phúc không phải là điều xa vời...
              </p>
            </div>
          </div>

          {/* Continue with other blog cards... */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Banner;
