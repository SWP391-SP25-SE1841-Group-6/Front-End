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
    <div className="banner">
      <div className="w-full h-full flex justify-center">
        <div className="relative flex  border border-amber-200 rounded-2xl w-full h-250 justify-center object-cover">
          <img
            src="https://images.unsplash.com/photo-1620389701363-b1d7a601e0c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fFBzeWNob2xvZ2ljYWwlMjBIZWFsdGh8ZW58MHx8MHx8fDA%3D"
            alt=""
            className="w-full h-auto object-cover"
          />
          {/* <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="text-center">
                <img
                  src={image.src}
                  alt={`slide-${index}`}
                  style={{ width: "10%", }}
                />
              </div>
            ))}
          </Slider> */}
        </div>
      </div>
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
                <div className="text-9xl text-red-600 m-5 ">
                  {" "}
                  <FontAwesomeIcon icon={faFire} />{" "}
                </div>
                <div className="">
                  <h4 className=" text-red-500 ">Lĩnh vực hoạt động</h4>
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
                <div className="text-9xl text-blue-700 m-5 ">
                  {" "}
                  <FontAwesomeIcon icon={faHeart} />{" "}
                </div>
                <div className="">
                  <h4 className=" text-blue-500 ">Giá trị cốt lõi</h4>
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
      <div className="container-banner">
        <div className="row mt-10 m-auto p-1">
          <div className="col s5 push-s5 ">
            <div className="row flex mb-0 ">
              <div className="col-6">
                <div className="rounded-lg bg-sky-900 w-140 text-3xl text-white h-75 p-10 justify-end flex">
                  School Psychology Advice Group6 là trung tâm cung cấp mọi dịch
                  vụ, hỗ trợ tư vấn tâm lí
                  <img
                    width="118"
                    height="63"
                    src="https://vinschool.edu.vn/wp-content/uploads/2019/06/ic-03.svg"
                    data-lazy-src="https://vinschool.edu.vn/wp-content/uploads/2019/06/ic-03.svg"
                    data-ll-status="loaded"
                    className="mt-35 text-6xl  text-black"
                  />
                </div>
              </div>

              <div className="col-6">
                <div className="rounded-lg bg-sky-700 w-130 text-3xl text-white  h-75 p-10 ">
                  <h4>
                    {" "}
                    Lộ trình học tập{" "}
                    <span>cá nhân hoá, dành riêng cho mỗi học sinh</span>
                  </h4>

                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="text-cyan-950 ml-70 text-7xl"
                  />
                </div>
              </div>
            </div>

            <div className="row flex mb-0">
              <div className="col-6">
                <div className="rounded-lg bg-sky-800 w-140 text-3xl text-white h-75 p-10">
                  <h4>Đào tạo thế hệ Việt Nam </h4>
                  <span>
                    với tư duy công dân toàn cầu, kỹ năng học tập suốt đời và
                    khát khao kiến tạo tương lai
                  </span>
                  <img
                   width="48"
                    height="48"
                    src="https://vinschool.edu.vn/wp-content/uploads/2019/06/ic-02-1.svg"
                    alt=""
                    className="ml-100 mb-2"
                  />
                </div>
              </div>

              <div className="col-6">
                <div className="rounded-lg bg-green-900 w-130 text-3xl text-white h-75 overflow-hidden">
                  <img
                    src="https://tamlyvietphap.vn/wp-content/uploads/2025/01/benh-tam-than-co-chua-khoi-duoc-khong_1609132017.jpg"
                    className="w-130 h-75 object-cover transform transition-all duration-300 ease-in-out hover:scale-120"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col s6 pull-s7 ">
            <div>
              <img
                src="https://png.pngtree.com/png-vector/20220607/ourmid/pngtree-modern-vector-logo-of-psychology-letter-psi-in-creative-style-png-image_4850550.png"
                alt=""
                className="ml-140  w-150 h-150"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className=" mt-20 ml-[10%] ">
          <h4 className="ml-130 w-140 h-13 text-white font-bold flex text-center bg-linear-to-t from-sky-500 to-indigo-500 justify-center  border  rounded-full ">
            DỊCH VỤ HỖ TRỢ TÂM LÍ
          </h4>
          <div className="grid grid-rows-3 grid-cols-2 gap-0 w-full h-350 ">
            <div className=" flex align-middle justify-center  border">
              <div className="mt-5 p-2 ">
                <h4 className=" text-center text-black p-4 ">
                  Dịch Vụ Tham Vấn - Trị Liệu Tâm Lý
                </h4>
                <p className="text-3xl text-black m-12 text-center ">
                  Ngạn ngữ có câu: “Hạnh phúc không phải là không có rắc rối mà
                  là có khả năng ứng phó với chúng.” Ai trong chúng ta đều ít
                  nhất đã một lần đối mặt với những khó khăn, rắc rối. Bởi vậy,
                  chuẩn bị một tâm thế sẵn sàng tiếp nhận, thích nghi và ứng phó
                  với những thay đổi ấy là điều kiện để mỗi người có thể sống
                  hạnh phúc.
                </p>
              </div>
            </div>
            <div className="overflow-hidden">
              <img
                src="https://t3.ftcdn.net/jpg/01/19/15/04/360_F_119150418_kCJtuuSgoEHdWUslrHAPdVBj8B0xvfjV.jpg"
                alt=""
                className="w-200 h-125 object-cover transform transition-all duration-300 ease-in-out hover:scale-103"
              />
            </div>

            <div className="overflow-hidden  ">
              <img
                src="https://vieclam123.vn/ckfinder/userfiles/images/images/bac-si-tam-ly.jpg"
                alt=""
                className="w-full h-130 object-cover transform transition-all duration-300 ease-in-out hover:scale-105 "
              />
            </div>
            <div className=" flex align-middle justify-center  w-200 h-full">
              <div className=" p-2 border">
                <h4 className="text-center  p-4 text-black ">
                  TRỊ LIỆU TÂM LÍ CÁ NHÂN
                </h4>
                <p className="text-3xl m-12  text-center">
                  Thông thường, khi gặp các vấn đề trong cuộc sống như rắc rối
                  trong tình cảm, xích mích gia đình, áp lực công việc,… đa phần
                  mọi người tìm đến bạn bè, người thân để được tâm sự và lắng
                  nghe. Tuy nhiên, không phải lúc nào họ cũng là chỗ dựa tinh
                  thần đáng tin cậy và khiến ta thoải mái để mở lòng. Một lựa
                  chọn khác khi đó là tìm đến nhà tâm lý.
                </p>
              </div>
            </div>

            <div className=" flex align-middle justify-center  w-300 h-full">
              <div className=" p-2 border rounded-lg">
                <h4 className="text-center  p-4 text-black">
                  Dịch Vụ Tâm Lý Học Đường
                </h4>
                <p className="text-3xl m-12  text-center">
                  Thông thường, khi gặp các vấn đề trong cuộc sống như rắc rối
                  trong tình cảm, xích mích gia đình, áp lực công việc,… đa phần
                  mọi người tìm đến bạn bè, người thân để được tâm sự và lắng
                  nghe. Tuy nhiên, không phải lúc nào họ cũng là chỗ dựa tinh
                  thần đáng tin cậy và khiến ta thoải mái để mở lòng. Một lựa
                  chọn khác khi đó là tìm đến nhà tâm lý.
                </p>
              </div>
            </div>
            <div className="overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1664302336737-37fce6daca3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-200 h-125 object-cover transform transition-all duration-300 ease-in-out hover:scale-103"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="content2 text-center m-40 ">
        <div className="flex justify-center  ">
          <h4 className="w-140 h-15 text-white font-bold flex text-center bg-gradient-to-r from-orange-300 to-red-500 justify-center border rounded-full p-3">
            CHƯƠNG TRÌNH NGOẠI KHÓA
          </h4>
        </div>

        <div className="grid grid-cols-3 m-10 h-auto w-full ">
          <div
            className="p-4 w-180 max-h-300  bg-cover bg-center bg-no-repeat text-white rounded-lg"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1560439514-07abbb294a86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className=" flex flex-col justify-end bg-black/40 p-4 rounded-lg ">
              <h5 className="font-bold text-lg text-red-400 ">
                CHUỖI HỘI THẢO & TALKSHOW
              </h5>
              <div className="text-left text-2xl m-5 font-bold ">
                <p className="flex flex-col justify-start">
                  Đa dạng chủ đề liên quan đến tâm lí học đường.
                  <br />
                  <strong>Khách mời:</strong> Chuyên gia tâm lý học đường, Giáo
                  viên tư vấn, Cựu học sinh
                  <br />
                  <strong>Hoạt động chính:</strong> Thảo luận mở, Chia sẻ câu
                  chuyện thực tế, Mini game nhận diện cảm xúc.
                </p>
              </div>
            </div>
          </div>

          <div
            className="p-1 w-180 h-170  bg-cover bg-center bg-no-repeat text-white rounded-lg"
            style={{
              backgroundImage:
                "url(https://plus.unsplash.com/premium_photo-1661719880750-4c0de579cd09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RlJJRU5EfGVufDB8fDB8fHww)",
            }}
          >
            <div className=" flex flex-col justify-end bg-black/40 p-4 rounded-lg ">
              <h5 className="font-bold text-lg text-red-400 ">
                GIAO LƯU-KẾT NỐI-TÌM BẠN BỐN PHƯƠNG
              </h5>
              <div className="text-left text-2xl m-5 font-bold ">
                <p className="flex flex-col justify-start">
                  Đa dạng chủ đề liên quan đến tâm lí học đường.
                  <br />
                  <strong>Khách mời:</strong> Chuyên gia tâm lý học đường, Giáo
                  viên tư vấn, Cựu học sinh
                  <br />
                  <strong>Hoạt động chính:</strong> Thảo luận mở, Chia sẻ câu
                  chuyện thực tế, Mini game nhận diện cảm xúc.
                </p>
              </div>
            </div>
          </div>

          <div
            className="p-4 w-180 max-h-300  bg-cover bg-center bg-no-repeat text-white rounded-lg"
            style={{
              backgroundImage:
                "url(https://cdn2.tuoitre.vn/thumb_w/480/2018/11/29/giao-vien-phu-huynh-1-1543477438854266465860.jpg)",
            }}
          >
            <div className=" flex flex-col justify-end bg-black/40 p-4 rounded-lg ">
              <h5 className="font-bold text-lg text-red-400 ">
                ĐỐI THOẠI CÙNG PHỤ HUYNH
              </h5>
              <div className="text-left text-2xl m-5 font-bold ">
                <p className="flex flex-col justify-start">
                  Xây dựng sự hiểu biết giữa phụ huynh và học sinh về tâm lý
                  tuổi dậy thì..
                  <br />
                  Workshop dành cho cha mẹ về cách lắng nghe và hỗ trợ con.
                  <br />
                  Chia sẻ từ các chuyên gia về cách đồng hành cùng con.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="title ">
        <div className="block text-center  ">
          <h3 className="text-blue-800 font-bold">Lĩnh Vực Hoạt Động</h3>
          <p className="text-3xl text-black max-w-2xl mx-auto">
            Với mong muốn đem đến cho thị trường những Sản phẩm – Dịch vụ theo
            đúng chuẩn mực đạo đức và những trải nghiệm hoàn toàn khác biệt,
            Viện Tâm lý hoạt động trong 3 lĩnh vực cốt lõi
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-10 m-20">
          <div className="w-190 text-center p-5  rounded-lg shadow-lg">
            <img
              src="https://png.pngtree.com/png-clipart/20240324/original/pngtree-psychological-counseling-concept-psychological-assistance-service-online-png-image_14671183.png"
              alt="Tư vấn – Trị liệu"
              className="mx-auto mb-4 w-70 h-50"
            />

            <h5 className="text-blue-800 bg-amber-200  font-bold">
              Tư vấn – Trị liệu <FontAwesomeIcon icon={faHeadphones} />
            </h5>
            <p className="text-2xl  mt-2 ">
              Tham vấn – Trị liệu tâm lý và tâm thần là một trong những lĩnh vực
              hoạt động chính của Viện Tâm lý. Chúng tôi luôn đồng hành và hỗ
              trợ thân chủ một cách tốt nhất.
            </p>
          </div>

          <div className="w-190 text-center p-5  rounded-lg shadow-lg">
            <img
              src="https://springo.vn/image/cache/data/thuyet-trinh-dinh-cao-500x333.jpg"
              alt="Đào tạo"
              className="mx-auto mb-4 w-70 h-50"
            />
            <h5 className="text-blue-900 font-bold bg-amber-200">
              Đào tạo <FontAwesomeIcon icon={faPersonChalkboard} />
            </h5>
            <p className="text-2xl mt-2">
              Viện Tâm lý Việt Pháp phối hợp với các tổ chức tổ chức các khóa
              đào tạo chuyên sâu, cung cấp kiến thức tâm lý và nâng cao sức khỏe
              tâm thần cộng đồng.
            </p>
          </div>

          <div className="w-190 text-center p-5 rounded-lg shadow-lg">
            <img
              src="https://static.hieuluat.vn/uploaded/Images/Original/2023/05/19/de-nghien-cuu-hieu-qua-can-nam-ro-cac-thuat-ngu_1905162308.jpg"
              alt="Nghiên cứu"
              className="mx-auto mb-4 w-70 h-50 "
            />
            <h5 className="text-blue-900 bg-amber-200 font-bold">
              Nghiên cứu <FontAwesomeIcon icon={faMagnifyingGlass} />
            </h5>
            <p className="text-2xl mt-2 ">
              Viện Tâm lý hướng đến các nghiên cứu chuẩn quốc tế, thúc đẩy phát
              triển ngành Tâm lý và Tâm thần học tại Việt Nam qua các dự án khoa
              học tiêu chuẩn cao.
            </p>
          </div>
        </div>
      </div>
      <div className="context-news text-center m-30">
        <h3 className="text-red-600">BLOG CHIA SẺ</h3>
      </div>
      <div className="grid grid-cols-4  gap-4 m-20">
        <div
          className="relative bg-cover bg-center bg-no-repeat text-white rounded-lg p-4 flex flex-col items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1559677437-62c20d42dd27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcGluZXNzfGVufDB8fDB8fHww)",
          }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

          <img
            src="https://thumbs.dreamstime.com/b/mot-happiness-141984449.jpg"
            className="relative rounded-full w-40 h-40 mx-auto z-10"
            alt="Happiness"
          />
          <p className="relative text-3xl text-blue-300 font-bold text-center mt-4">
            Làm Thế Nào Để Trở Nên Hạnh Phúc Hơn
          </p>
          <div className="relative border-t-2 border-gray-400 w-10 my-2 z-10"></div>
          <p className="relative text-2xl text-center font-bold">
            Hạnh phúc không phải là điều xa vời, mà là kết quả của những thói
            quen tích cực hàng ngày. Hãy học cách yêu thương bản thân và tìm
            kiếm niềm vui từ những điều giản dị...
          </p>
        </div>

        <div
          className="relative bg-cover bg-center bg-no-repeat text-white rounded-lg p-4 flex flex-col items-center"
          style={{
            backgroundImage:
              "url(https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2024/5/11/tram-cam-17153947032531902417056.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

          <img
            src="https://images.unsplash.com/photo-1672233358780-ed92c20e00e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c28lMjBzYWR8ZW58MHx8MHx8fDA%3D"
            className="relative rounded-full w-40 h-40 mx-auto items-center "
            alt="sad"
          />
          <p className="relative text-3xl text-blue-300 font-bold text-center mt-4">
            Làm Sao Để Vượt Qua Nỗi Sợ Hãi?
          </p>
          <div className="relative border-t-2 border-gray-400 w-10 my-2 z-10"></div>
          <p className="relative text-2xl text-center font-bold">
            Nỗi sợ hãi là một phần của cuộc sống, nhưng bạn có thể học cách kiểm
            soát nó bằng cách đối mặt, tìm hiểu nguyên nhân và từng bước vượt
            qua bằng sự kiên nhẫn và tự tin...
          </p>
        </div>

        <div
          className="relative bg-cover bg-center bg-no-repeat text-white rounded-lg p-4 flex flex-col items-center"
          style={{
            backgroundImage:
              "url(https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/https://cms-prod.s3-sgn09.fptcloud.com/bai_test_roi_loan_cam_xuc_luong_cuc_muc_dich_va_luu_y_khi_thuc_hien_3_811c137863.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

          <img
            src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2024/5/11/tram-cam-17153947032531902417056.jpg"
            className="relative rounded-full w-40 h-40 mx-auto z-10"
            alt="Happiness"
          />
          <p className="relative text-3xl text-blue-300 font-bold text-center mt-4">
            Những Biểu Hiện Của Bệnh Tâm Lí Có Thể Bạn Chưa Biết
          </p>
          <div className="relative border-t-2 border-gray-400 w-10 my-2 z-10"></div>
          <p className="relative text-2xl text-center font-bold">
            Rối loạn tâm lý có nhiều dấu hiệu như căng thẳng kéo dài, mất ngủ,
            lo âu và thay đổi tâm trạng thất thường. Hiểu biết về các biểu hiện
            này giúp bạn chăm sóc sức khỏe tinh thần tốt hơn...
          </p>
        </div>

        <div
          className="relative bg-cover bg-center bg-no-repeat text-white rounded-lg p-4 flex flex-col items-center"
          style={{
            backgroundImage:
              "url(https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/https://cms-prod.s3-sgn09.fptcloud.com/bai_test_roi_loan_cam_xuc_luong_cuc_muc_dich_va_luu_y_khi_thuc_hien_3_811c137863.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

          <img
            src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2024/5/11/tram-cam-17153947032531902417056.jpg"
            className="relative rounded-full w-40 h-40 mx-auto z-10"
            alt="Happiness"
          />
          <p className="relative text-3xl text-blue-300 font-bold text-center mt-4">
            Những Biểu Hiện Của Bệnh Tâm Lí Có Thể Bạn Chưa Biết
          </p>
          <div className="relative border-t-2 border-gray-400 w-10 my-2 z-10"></div>
          <p className="relative text-2xl text-center font-bold">
            Rối loạn tâm lý có nhiều dấu hiệu như căng thẳng kéo dài, mất ngủ,
            lo âu và thay đổi tâm trạng thất thường. Hiểu biết về các biểu hiện
            này giúp bạn chăm sóc sức khỏe tinh thần tốt hơn...
          </p>
        </div>
      </div>
      <div className="p-2 m-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Banner;
