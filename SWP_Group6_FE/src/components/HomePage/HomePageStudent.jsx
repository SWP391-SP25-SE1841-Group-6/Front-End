import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faHeart,
  faFire,
  faStar,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer/Footer";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import {  useNavigate } from "react-router-dom";

const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-0 transform -translate-y-1/2 text-3xl text-gray-600 hover:text-gray-900 z-10"
    onClick={onClick}
  >
    <AiOutlineRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl text-gray-600 hover:text-gray-900 z-10"
    onClick={onClick}
  >
    <AiOutlineLeft />
  </button>
);
const Profiles = [
  {
    name: "Mrs.Kim Sean Ho",
    specialization: "Psychology, Community Mental Health",
    teaching: "School psychology consultancy",
    unit: "Faculty of Psychology, University of Social Sciences and Humanities, VNU-HCM",
    image:
      "https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?w=500&auto=format&fit=crop&q=60",
    rating: 4,
  },
  {
    name: "Dr. Emily Carter",
    specialization: "School Counseling, Adolescent Psychology",
    teaching: "Emotional Regulation in Schools",
    unit: "Department of School Psychology, Stanford University",
    image:
      "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60",
    rating: 4.5,
  },
  {
    name: "Prof. Lisa Nguyen",
    specialization: "Educational Psychology, Child Development",
    teaching: "Learning Disabilities and Interventions",
    unit: "Faculty of Psychology, University of Melbourne",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
    rating: 3,
  },
  {
    name: "Dr. Hannah Lee",
    specialization: "Behavioral Psychology, Social Emotional Learning",
    teaching: "Positive Behavior Support in Schools",
    unit: "School of Psychology, University of Toronto",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60",
    rating: 5,
  },
  {
    name: "Dr. Olivia Brown",
    specialization: "Cognitive Psychology, Learning Strategies",
    teaching: "Effective Teaching and Learning Strategies",
    unit: "Department of Psychology, University of Oxford",
    image:
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60",
    rating: 4,
  },
  {
    name: "Prof. Ava Martinez",
    specialization: "Mental Health in Schools, Crisis Intervention",
    teaching: "Mental Health Support for Students",
    unit: "Faculty of Education, University of California, Berkeley",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
    rating: 5,
  },
  {
    name: "Dr. Jackie Zhang",
    specialization: "Clinical Psychology, Anxiety Disorders",
    teaching: "Cognitive Behavioral Therapy in Clinical Settings",
    unit: "Department of Psychology, Harvard University",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww",
    rating: 4.2,
  },
  {
    name: "Dr. Chloe Williams",
    specialization: "Neuropsychology, Cognitive Development",
    teaching: "Developmental Neuropsychology in Early Childhood",
    unit: "School of Psychology, University of Cambridge",
    image:
      "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtZW58ZW58MHx8MHx8fDA%3D",
    rating: 4.8,
  },
];

const images = [
  {
    src: "https://tamlyvietphap.vn/wp-content/uploads/2025/01/dichvutamlydoanhnghiep-300x168.png",
    title: "Dịch vụ đào tạo và chuyên môn tâm lí",
  },
  {
    src: "https://tamlyvietphap.vn/wp-content/uploads/2025/01/dichvuthamvantamly-300x168.png",
    title: "Dịch vụ tham vấn và trị liệu, tâm lí",
  },
  {
    src: "https://tamlyvietphap.vn/wp-content/uploads/2025/01/dichvutamlydoanhnghiep-300x168.png",
    title: "Dịch vụ tâm lí doanh nghiệp",
  },
  {
    src: "https://tamlyvietphap.vn/wp-content/uploads/2025/01/dichvutamlyhocduong-300x168.png",
    title: "Dịch vụ tâm lí học đường",
  },
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const HomePageStudent = () => {
  const navigate = useNavigate();
  console.log("role: " + localStorage.getItem("role"));
const handleClick = () => {
  navigate("/contact"); // Chuyển đến trang /contact
};
  return (
    <div className="bg-gray-200">
      <div className="text  ml-100 mt-2 w-full h-full">
        <div className="row flex flex-cols-2 flex-row-2 ">
          <div className="flex-col-4  ">
            <div className="title col-1">
              <h3 className="flex  font-bold text-red-500">Giới Thiệu</h3>
              <p className="text-2xl text-sky-900 font-bold">VỀ CHÚNG TÔI</p>
              <span className="text-2xl">
                -Viện Tâm lý GROUP6 được thành lập theo Giấy chứng nhận <br />
                Doanh nghiệp Khoa học công nghệ số B-16/2019ĐK-KHCN <br /> ngày
                05/06/2019 của Sở KH&CN thành phố Hồ Chí Minh.
              </span>
            </div>

            <div className="title2 ml-1">
            <div className="grid-cols-2 grid-row-2 flex">
            <div className="text-9xl text-red-600 m-5 ">  <FontAwesomeIcon icon={faFire} /> </div>
            <div className=""> 
               <h4 className=" text-red-500 ">
              
              Lĩnh vực hoạt động
            </h4>
            <p className="text-2xl">
                Viện Tâm lý GROUP6 hoạt động trong các lĩnh vực: <br />
                -Nghiên cứu tâm lý,
                <br />
                -Đào tạo chuyên gia,
                <br />
                -Cung cấp dịch vụ trị liệu tâm lý
                <br />
                -Hướng đến nâng cao sức khỏe tinh thần tại Việt Nam
              </p>
             </div>
        
            </div>
             
            <div className="grid-cols-2 grid-row-2 flex">
            <div className="text-9xl text-blue-700 m-5 ">  <FontAwesomeIcon icon={faHeart} /> </div>
            <div className=""> 
               <h4 className=" text-blue-500 ">
              
               Giá trị cốt lõi
            </h4>
            <p className="text-2xl">
        
                -Bảo mật
                <br /> –Tận tâm <br />
                –Chuyên nghiệp
              
              </p>
             </div>
        
            </div>       
            </div>

          </div>
          <div className=" relative w-250 h-150 m-5">
            <img
              src="https://plus.unsplash.com/premium_photo-1661308281704-f5b562260e1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHN5Y2hvbG9naWNhbCUyMGNvbnN1bHRhbnR8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="w-full h-full object-cover"
            />
        
          </div>
        </div>
      </div>
      <div className="service">
        <div className="row">
          <div className="col-6 flex flex-col justify-center items-center m-auto">
            <h4 className="text-red-400 ">Dịch vụ</h4>
            <h3 className="text-sky-600">Dịch vụ của chúng tôi</h3>
            <p className="text-2xl">
              Cung cấp giải pháp tâm lý chuyên nghiệp, toàn diện, cá nhân hóa,
              nâng cao sức khỏe tinh thần.
            </p>
          </div>

          <div className="col-6 flex flex-col justify-center">
            <div className="title text-center mb-15 "></div>
            <Slider {...settings} className=" pl-60 flex justify-center ">
              {images.map((image, index) => (
                <div key={index} className="flex justify-between gap-1">
                  <img
                    src={image.src}
                    alt={image.title}
                    style={{ width: "70%" }}
                  />
                  <h5 className="w-[65%] text-center  ml-2">{image.title}</h5>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="happy bg-sky-800 w-full h-20  text-white flex justify-center">
        <h4>“HẠNH PHÚC CỦA BẠN – SỨ MỆNH CỦA CHÚNG TÔI”</h4>
      </div>
      <div className="row flex flex-col-2 flex-row-2 justify-between">
        <div className="col-8">
          <img
            src="https://tamlyvietphap.vn/wp-content/uploads/2025/02/anhnoibat_desktop.png"
            alt=""
            className="w-300 h-200 m-10 object-cover p-10"
          />
        </div>
        <div className="col-4 w-full h-full mt-30 p-10">
          <h4 className="text-red-500 font-bold">Nổi bật</h4>
          <h3 className="text-blue-600 font-bold">VÌ SAO CHỌN CHÚNG TÔI</h3>
          <p className="text-4xl ">
            Tự hào là đơn vị uy tín với đội ngũ chuyên gia giàu kinh nghiệm,
            <br />
            phương pháp khoa học và dịch vụ tận tâm, Viện Tâm lý GROUP6
            <br />
            luôn cam kết mang đến những giải pháp tối ưu, đáp ứng <br />
            hiệu quả mọi nhu cầu về sức khỏe tinh thần.
          </p>
          <div className="mt-5">
            <p className="text-3xl p-2">
              <FontAwesomeIcon icon={faShield} className="text-blue-700 pr-2" />
              Đội ngũ chuyên gia được đào tạo bài bản từ các trường đại học danh
              tiếng <br /> trong nước và quốc tế.
            </p>
            <p className="text-3xl p-2">
              <FontAwesomeIcon icon={faStar} className="text-blue-700 pr-2" />
              Phương pháp khoa học, cá nhân hóa phù hợp cho từng người.
            </p>
            <p className="text-3xl p-2">
              <FontAwesomeIcon
                icon={faChalkboardUser}
                className="text-blue-700 pr-2"
              />
              Không gian trị liệu hiện đại, an toàn và chuyên nghiệp.
            </p>
            <p className="text-3xl p-2">
              <FontAwesomeIcon icon={faShield} className="text-blue-700 pr-2" />
              Cam kết bảo mật tuyệt đối thông tin khách hàng.
            </p>
          </div>
        </div>
      </div>
      <div className="guest w-full h-auto">
        <div className="content flex flex-col h-110 bg-sky-200 items-center justify-center text-center">
          <h5 className="text-red-600 font-bold">Trải nghiệm khách hàng</h5>
          <h4 className="font-bold text-sky-900 ">PHẢN HỒI TỪ KHÁCH HÀNG</h4>
          <p className="text-xl ">
            Những chia sẻ từ khách hàng là minh chứng cho chất lượng và sự tận
            tâm của chúng tôi,
            <br />
            là động lực để không ngừng cải thiện mỗi ngày.
          </p>
          <div className="flex flex-col-3 flex-row-3 mt-5 gap-3">
            <div className="comment1 w-[28%]">
              <div className="text-yellow-500 text-2xl ">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <h5>Sinh viên Nguyên Văn …</h5>
              <p className="text-lg font-bold">
                “Nhờ sự đồng hành tận tâm của các chuyên gia tại Viện Tâm lý
                GROUP6, tôi đã vượt qua được những căng thẳng và lấy lại sự cân
                bằng trong cuộc sống. Thật sự biết ơn!”
              </p>
            </div>

            <div className="comment1 w-[28%]">
              <div className="text-yellow-500 text-2xl ">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <h5>Khách hàng Lê Thị…</h5>
              <p className="text-lg font-bold">
                “Dịch vụ tại đây rất chuyên nghiệp và chu đáo. Tôi cảm nhận được
                sự an toàn và thoải mái trong suốt quá trình trị liệu.”
              </p>
            </div>

            <div className="comment1 w-[28%]">
              <div className="text-yellow-500 text-2xl ">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <h5>Khách tư vấn tâm lý …</h5>
              <p className="text-lg font-bold">
                “Tôi ấn tượng với không gian hiện đại và cách làm việc khoa học
                của Viện. Đây là nơi tôi tìm thấy sự đồng cảm và giải pháp cho
                vấn đề của mình.”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lecture w-full h-full">
        <div className="context w-full ">
          <h5 className="flex justify-center text-red-700">Chuyên gia</h5>
          <p className="flex justify-center text-2xl font-bold text-blue-900">
            ĐỘI NGŨ CHUYÊN GIA
          </p>
          <p className="flex justify-center text-xl mt-2 font-bold">
            Chuyên gia giàu kinh nghiệm, tận tâm và chuyên nghiệp, luôn đồng
            hành cùng bạn tìm lại sự cân bằng và hạnh phúc.
          </p>
        </div>
        <div className="w-full px-4">
          <Slider {...settings} className="gap-10">
            {Profiles.map((profile, index) => (
              <div key={index} className="p-2">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="mt-5 w-40 h-40 rounded-full object-cover mx-auto transition-transform duration-300 hover:scale-120"
                />
                <h5 className="text-center mt-2">{profile.name}</h5>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="mt-5 m-auto flex justify-center">
        <button
          onClick={handleClick}
          className="mr-auto w-30 h-10 border-w-1px rounded-full border border-red-600 bg-red-600 text-white  font-bold cursor-pointer"
        >
          Chi Tiết
        </button>
      </div>

      <div className="row flex justify-center mt-10">
        <div className="col-6 w-150 h-140">
          <div className="text-3xl">
            <h5 className="text-red-600 text-xl font-bold">Kiến thức</h5>
            <h4 className="text-blue-700 font-bold">CHUYÊN TRANG TÂM LÝ</h4>
            <p className="font-bold text-xl">
              Khám phá tâm lý học từ gốc rễ đến chiều sâu <br /> chuyên môn
            </p>
            <span className="text-xl">
              Cùng Viện Tâm lý GROUP6, bạn sẽ bước vào thế giới tâm lý học với
              những bài viết và chia sẻ hữu ích, dễ tiếp cận. Tại đây, bạn có
              thể tìm hiểu kiến thức về tâm lý con người, học cách quản lý cảm
              xúc, cải thiện sức khỏe tinh thần, và áp dụng chúng vào cuộc sống.
              <br />
              Dù bạn là chuyên gia hay đang tìm kiếm sự hỗ trợ, hành trình{" "}
              <br />
              này sẽ giúp bạn hiểu sâu hơn về bản thân và kết nối ý nghĩa với
              mọi người xung quanh
            </span>
          </div>
          <div className="mt-10 ml-5 m-auto flex border-red-400 text-lg">
            <button className="mr-auto w-30 h-10 border-w-1px rounded-full border border-red-600 bg-red-600 text-white  font-bold cursor-pointer">
              Chi Tiết
            </button>
          </div>
        </div>

        <div className="col-6">
          <img
            src="https://tamlyvietphap.vn/wp-content/uploads/2025/02/chuyentrangtamly.png"
            alt=""
            className="w-"
          />
        </div>
      </div>

      <div className="doitac mt-12">
        <div className="context">
          <p className="flex justify-center text-2xl font-bold text-red-500">
            Đối tác
          </p>
          <p className="flex justify-center text-3xl mt-2 font-bold text-sky-800">
            ĐỐI TÁC CỦA CHÚNG TÔI
          </p>
        </div>
        <div className="flex gap-20 m-auto  p-10 mt-5 overflow-hidden justify-center">
          <img
            className="w-50 h-50 rounded-full object-cover transform transition-all ease-in-out duration-300 hover:scale-120"
            src="https://tamlyvietphap.vn/wp-content/uploads/2025/01/12-Saigon_International_University_SIU_1311085749.jpg"
            alt="Rounded avatar"
          />
          <img
            className="w-50 h-50 rounded-full object-cover transform transition-all ease-in-out duration-300 hover:scale-120"
            src="https://tamlyvietphap.vn/wp-content/uploads/2025/01/fulbright-university-tam-ly-viet-phap_1803155708.jpg"
            alt="Rounded avatar"
          />
          <img
            className="w-50 h-50 rounded-full object-cover transform transition-all ease-in-out duration-300 hover:scale-120"
            src="https://tamlyvietphap.vn/wp-content/uploads/2025/01/5-Ministry_of_Education_and_Training_Vietnam_1311085738.jpg"
            alt="Rounded avatar"
          />
          <img
            className="w-50 h-50 rounded-full object-cover transform transition-all ease-in-out duration-300 hover:scale-120"
            src="https://tamlyvietphap.vn/wp-content/uploads/2025/01/9-CMC_University_1311085739.jpg"
            alt="Rounded avatar"
          />
          <img
            className="w-50 h-50 rounded-full object-cover transform transition-all ease-in-out duration-300 hover:scale-120"
            src="https://tamlyvietphap.vn/wp-content/uploads/2025/01/10-Thanh_Xuan_Secondary_School_1311085728.jpg"
            alt="Rounded avatar"
          />
        </div>
      </div>

      <div className="contactt">
        <div className="row flex w-full h-auto bg-gray-100 justify-between">
          <h4 className="flex  text-blue-700">Bạn đang đang gặp vấn đề nào?</h4>
          <div className="col-6 flex  relative mb-auto pl-10">
            <div className="relative  rounded-2xl  flex justify-center items-center">
              {/* <img
          src="https://images.unsplash.com/photo-1620389701363-b1d7a601e0c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fFBzeWNob2xvZ2ljYWwlMjBIZWFsdGh8ZW58MHx8MHx8fDA%3D"
          alt=""
          className="w-[100%] "
        /> */}
              <div className="flex-col-1 pl-50">
                <div className="text-4xl">
                  <p>-Rối Loạn Lo Âu</p>
                  <p>-Rối Loạn Tăng Động Giảm Chú Ý – ADHD</p>
                  <p>-Rối Loạn Trầm Cảm</p>
                  <p>-Sang Chấn Tâm Lý – PTSD</p>
                  <p>-Tự Kỉ</p>
                  <p>...</p>
                  <p>HÃY ĐẾN NGAY VỚI CHÚNG TÔI</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 flex mt-2 ">
            <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-3xl font-bold mb-4 text-center text-blue-800">
                Liên hệ với chúng tôi
              </h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-lg font-black text-black">
                    Tên Khách Hàng:
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full bg-white rounded-md p-2 text-lg border-amber-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-black">
                    Địa Chỉ
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-black">
                    Số Điện Thoại
                  </label>
                  <input
                    type="text"
                    placeholder="VD:09222xxxx"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-black">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="VD:example@gmail.com"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-black">
                    Notes
                  </label>
                  <input
                    type="text"
                    placeholder="Bạn đang cần trợ giúp gì?"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-11 bg-orange-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Đăng kí
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePageStudent;
