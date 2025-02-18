
import "../../App.css";
import { Footer } from "../Footer/Footer";
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row mt-18 m-auto">
          <div className="col s5 push-s4 ">
            <div className="row flex mb-0">
              <div className="col-6">
                <div className="bg-sky-900 w-140 text-xl text-white h-75 p-10">
                  Là trung tâm hàng đầu Việt Nam cung cấp mọi dịch vụ, hỗ trợ tư
                  vấn tâm lí
                </div>
              </div>

              <div className="col-6">
                <div className="bg-sky-700 w-130 text-xl text-white  h-75 p-10">
                  Là trung tâm hàng đầu Việt Nam cung cấp mọi dịch vụ,
                  hỗ trợ tư vấn tâm lí
                </div>
              </div>
            </div>

            <div className="row flex mb-0">
              <div className="col-6">
                <div className="bg-sky-800 w-140 text-xl text-white h-75 p-10">
                  Dẫn đầu Edtech Việt Nam với 2 giải thưởng danh giá tại Asian
                  Technology Excellence Awards
                </div>
              </div>

              <div className="col-6">
                <div className="bg-green-900 w-130 text-xl text-white h-75 ">
                  <img src="https://tamlyvietphap.vn/wp-content/uploads/2025/01/benh-tam-than-co-chua-khoi-duoc-khong_1609132017.jpg"
                  className=" w-130 h-75 object-cover
                  " alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Cột chứa ảnh */}
          <div className="col s6 pull-s7 ">
            <div>
              <img src="https://png.pngtree.com/png-vector/20220607/ourmid/pngtree-modern-vector-logo-of-psychology-letter-psi-in-creative-style-png-image_4850550.png" alt="" className="w-full h-150" />
            </div>
          </div>
        </div>
      </div>
      <div className="title">
        <div className="line" style={{ margin: "0px 120px" }}>
          <h4 className="text-white">CHƯƠNG TRÌNH GIÁO DỤC</h4>
          <div className="line1"></div>
        </div>
      </div>
      <div className="content">
        <div className=" mt-20 ml-25">
          <div className="grid grid-rows-3 grid-cols-2 gap-1 w-full h-300">
            <div className=" flex align-middle justify-center bg-blue-900 ">
              <div className="mt-20 p-2 ">
                <h4 className=" text-start text-white p-4 ">
                  Chương trình điều trị giáo dục tâm lí
                </h4>
                <p className="text-2xl text-sky-200 ">
                  Định hướng giáo dục,giúp trẻ phát triển, <br /> cải thiện toàn
                  diện thể chất, trí tuệ, tinh thần, phẩm chất và mối quan hệ xã
                  hội{" "}
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://daihoc.fpt.edu.vn/wp-content/uploads/2024/12/IMG_6437-scaled.avif"
                alt=""
                className="w-200 h-125 object-cover"
              />
            </div>

            <div>
              <img
                src="https://daihoc.fpt.edu.vn/wp-content/uploads/2024/12/2D1A4618-scaled.avif"
                alt=""
                className="w-300 h-100 object-cover"
              />
            </div>
            <div
              className=" flex align-middle justify-center  w-200 h-100"
              style={{ background: "#f72b44" }}
            >
              <div className="mt-20 p-2 ">
                <h3 className=" text-start text-white p-4">
                  Chương trình giáo dục phổ thông
                </h3>
                <p className="text-2xl text-red-200 m-auto pl-4">
                  Group6 dẫn đầu về đổi mới giáo dục phổ thông ở Việt Nam
                </p>
              </div>
            </div>

            <div className="content2">
              <div className="bg-red-400 w-442 h-102  mt-2 p-5">
                <h4 className=" pl-20 text-white">Chương trình ngoại khóa</h4>
                <p className="text-2xl pl-20 mt-5 text-sky-100">
                  Câu lạc bộ ngoại khóa Vinschool được thiết kế đa năng, nội
                  dung phong phú với nhiều môn học cho học sinh lựa chọn
                </p>
                <div className="flex gap-10 pl-60 mt-5">
                  <img
                    className="w-40 h-40 rounded-full object-cover "
                    src="https://vinschool.edu.vn/wp-content/uploads/2024/12/13/STU5333-min-scaled.jpg"
                    alt="Rounded avatar"
                  />
                  <img
                    className="w-40 h-40  rounded-full object-cover"
                    src="https://vinschool.edu.vn/wp-content/uploads/2024/12/13/NHT08432-min-scaled.jpg"
                    alt="Rounded avatar"
                  />
                  <img
                    className="w-40 h-40  rounded-full object-cover"
                    src="https://vinschool.edu.vn/wp-content/uploads/2024/12/13/MIX06033-min-scaled.jpg"
                    alt="Rounded avatar"
                  />
                  <img
                    className="w-40 h-40  rounded-full object-cover"
                    src="https://vinschool.edu.vn/wp-content/uploads/2023/12/05/z4941010377693_99c89ec4d36dd0970344c8afa6adb808.jpg"
                    alt="Rounded avatar"
                  />
                  <img
                    className="w-40 h-40  rounded-full object-cover"
                    src="https://vinschool.edu.vn/wp-content/uploads/2023/12/05/z4941010532202_07bf6fbfcc9aa024ef75aec5f75eb30b.jpg"
                    alt="Rounded avatar"
                  />
                </div>
                <div className="flex justify-center align-middle  m-auto rounded-full mt-5">
                  <button className=" bg-white text-red-600 rounded-md  h-10  text-lg">
                    Tìm hiểu chương trình
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="title">
  <div className="line" style={{ margin: "10px 100px" }}>
    <h4 className="text-white">THÀNH TÍCH VINSERS</h4>
    <div className="line1">
    
    </div>
  </div>


  <div className="mt-15 w-[92%] pl-22">
    <img
      src="https://vinschool.edu.vn/wp-content/uploads/2024/12/23/1418-1-1-e1736758155652.png"
      alt=""
      className="max-full  mt-10 mb-3"
    />
  </div>
</div>
      <div className="title">
  <div className="line" style={{ margin: "10px 100px" }}>
    <h4 className="text-white">Tin tức</h4>
    <div className="line1">
    
    </div>
  </div>


  <div className="mt-15 w-[92%] pl-22">
    <img
      src=""
      alt=""
      className="max-full  mt-10 mb-3"
    />
  </div>
</div>
<div className="p-2 m-auto">    <Footer /></div>
   
    </div>
  );
};

export default Banner;
