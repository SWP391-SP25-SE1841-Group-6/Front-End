import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const PaginationRounded = () => {
  return (
    <Stack spacing={2} className="flex justify-center mt-8 m-auto w-100">
      <Pagination
        count={10}
        shape="rounded"
        sx={{ bgcolor: "white", color: "black" }}
      />
    </Stack>
  );
};
const Skcx = () => {
  return (
    <>
      <div className="">
        <div className="w-[80%] flex justify-between ml-40 mb-10">
          <Link className="!text-4xl !text-black mt-6" to="/studenthome/Sknt">SỨC KHỎE NHẬN THỨC</Link>
          <Link className="!text-4xl !text-black mt-6" to="/studenthome/Skxh">SỨC KHỎE XÃ HỘI</Link>
          <h4 className="border-2 bg-blue-950 rounded-xl text-white max-w-60 max-h-30 text-center">SỨC KHỎE CẢM XÚC </h4>
          <Link className="!text-4xl !text-black mt-6" to="/studenthome/Sktc">SỨC KHỎE THỂ CHẤT </Link>

        </div>
      </div>

      <div className="w-[60%] h-150 object-cover m-auto ">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-twitch-banner-template-world-mental-health-day_23-2150742919.jpg"
     
            alt=""
            className="w-full h-100 bg-no-repeat object-cover "
          />
      
        </div>

      <div className="grid-cols-4 grid-rows-2 text-black mb-5 w-[95%] ">
        <div className="flex-row-2 flex-col-2 flex ml-20  ">
          <h3 className="w-80 ">Là gì?</h3>
          <span className="text-4xl">
          Khả năng nhận diện, điều tiết và thể hiện cảm xúc phù hợp.
            <p className="border-b-1 mt-2"></p>
          </span>
        </div>
        <div className="flex-row-2 flex-col-2 flex ml-20  ">
          <h3 className="w-110 justify-start  flex ">
            Bao gồm những thành phần nào ?
          </h3>
          <span className="text-4xl mt-8">
          Nhận biết và kiểm soát cảm xúc, khả năng thích ứng với áp lực, căng thẳng, 
thái độ tích cực và khả năng tự điều chỉnh. 
            <p className="border-b-1 mt-2"></p>
          </span>
        </div>
        <div className="flex-row-2 flex-col-2 flex ml-30  ">
          <h3 className="w-110">Biểu hiện thế nào?</h3>
          <span className="text-4xl mt-2 ml-2">
          Biết cách kiểm soát cảm xúc tiêu cực như lo âu, tức giận.
 giữ được trạng thái tâm lý ổn định trong mọi hoàn cảnh, 
 có cái nhìn lạc quan, biết cách tự động viên bản thân.
            <p className="border-b-1 mt-2"></p>
          </span>
        </div>
      </div>
      <p className="border-b-8 w-50 text-center m-auto"></p>
      <div className="header-program ">
     
    
        <div className="body-program">
          <div className="title flex  flex-col  text-center m-10">
            <h3 className="text-sky-800 font-bold ">CÁC CHƯƠNG TRÌNH HỖ TRỢ  <FontAwesomeIcon icon={faDesktop} /></h3>
          </div>

          <div className="row flex flex-col-1 flex-row-2  justify-between gap-10">
            <div className="col-6 boder w-[60%] ml-5">
              <div className="content-matngu border-gray-400  border-5 h-110 rounded-lg">
                <h3 className="flex justify-center">Mất ngủ</h3>
                <div className="pl-10">
                  <h4>
                    <strong>Nhóm</strong> <span>Sức khỏe nhận thức</span>
                  </h4>
                  <h4>
                    <strong> Đối tượng tham gia</strong> <span>HS khối 9</span>
                  </h4>
                  <h4>
                    <strong> Mục tiêu</strong>
                    <span> Sắp xếp thời gian hợp lí</span>
                    <div className="mt-2">
                      <Link
                        to="/studenthome/Rlla"
                        className="!text-orange-400 hover:!text-orange-600"
                      >
                        Xem thêm
                      </Link>
                    </div>
                    <div className="mt-6 text-3xl ">
                
                      <Link to="/studenthome/test" className="!border !bg-blue-950 !text-white !rounded-lg hover:!bg-orange-600" >Đăng kí tham gia</Link>
                    </div>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-6 boder w-[40%]">
              <div className="content-matngu border-gray-400  border-5 h-95 rounded-lg ">
                <h3 className="text-center">Mất ngủ</h3>
                <div className=" m-10">
                  <h4>
                    <strong>Nhóm</strong> <span>Sức khỏe cảm xúc</span>
                  </h4>
                  <h4>
                    <strong> Đối tượng tham gia</strong> <span>HS khối 9</span>
                  </h4>
                  <h4>
                    <strong> Mục tiêu</strong>
                    <span> Tăng cường cảm nhận hạnh phúc</span>
                    <div className="mt-2 text-3xl">
                      <Link to="/studenthome/Rlla" className="!text-orange-400">
                        Xem thêm
                      </Link>
                    </div>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* Thẻ mới - Rối loạn lo âu */}
          <div className="row flex flex-col-1 flex-row-2  justify-between gap-10 m-3">
            <div className="col-6 boder w-[60%] ml-5">
              <div className="content-matngu border-gray-400  border-5 h-100 rounded-lg">
                <h3 className="flex justify-center">Rối loạn lo âu</h3>
                <div className="pl-10">
                  <h4>
                    <strong>Nhóm</strong> <span>Sức khỏe tâm lý</span>
                  </h4>
                  <h4>
                    <strong> Đối tượng tham gia</strong> <span>HS khối 9</span>
                  </h4>
                  <h4>
                    <strong> Mục tiêu</strong>
                    <strong>Mục tiêu</strong>{" "}
                    <span>Giảm căng thẳng và lo âu</span>
                    <div className="mt-2">
                      <Link
                        to="/studenthome/Rlla"
                        className="!text-orange-400 hover:!text-orange-600"
                      >
                        Xem thêm
                      </Link>
                    </div>
                    <div className="mt-6 text-3xl ">
                
                      <Link to="/studenthome/test" className="!border !bg-blue-950 !text-white !rounded-lg hover:!bg-orange-600" >Đăng kí tham gia</Link>
                    </div>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-6 boder w-[40%]">
              <div className="content-matngu border-gray-400  border-5 h-90 rounded-lg ">
                <h3 className="text-center">Mất ngủ</h3>
                <div className=" m-10">
                  <h4>
                    <strong>Nhóm</strong> <span>Sức khỏe cảm xúc</span>
                  </h4>
                  <h4>
                    <strong> Đối tượng tham gia</strong> <span>HS khối 9</span>
                  </h4>
                  <h4>
                    <strong> Mục tiêu</strong>
                    <span> Tăng cường cảm nhận hạnh phúc</span>
                    <div>
                      <Link to="/studenthome/Rlla" className="text-orange-400">
                        Tìm hiểu thêm
                      </Link>
                    </div>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* Thẻ mới - Rsctl*/}
          <div className="row flex flex-col-1 flex-row-2  justify-between gap-10 m-3">
            <div className="col-6 boder w-[60%] ml-5">
              <div className="content-matngu border-gray-400  border-5 h-100 rounded-lg">
                <h3 className="flex justify-center"> Sang chấn tâm lý</h3>
                <div className="pl-10">
                  <h4>
                    <strong>Nhóm</strong> <span>Sức khỏe xã hội</span>
                  </h4>
                  <h4>
                    <strong> Đối tượng tham gia</strong> <span>HS khối 9</span>
                  </h4>
                  <h4>
                    <strong> Mục tiêu</strong>
                    <strong>Mục tiêu</strong>{" "}
                    <span>Phục hồi và ổn định tinh thần</span>
                    <div className="mt-2">
                      <Link
                        to="/studenthome/Rlla"
                        className="!text-orange-400 hover:!text-orange-600"
                      >
                        Xem thêm
                      </Link>
                    </div>
                    <div className="mt-6 text-3xl ">
                
                      <Link to="/studenthome/test" className="!border !bg-blue-950 !text-white !rounded-lg hover:!bg-orange-600" >Đăng kí tham gia</Link>
                    </div>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-6 boder w-[40%]">
              <div className="content-matngu border-gray-400  border-5 h-90 rounded-lg ">
                <h3 className="text-center">Mất ngủ</h3>
                <div className=" m-10">
                  <h4>
                    <strong>Nhóm</strong> <span>Sức khỏe cảm xúc</span>
                  </h4>
                  <h4>
                    <strong> Đối tượng tham gia</strong> <span>HS khối 9</span>
                  </h4>
                  <h4>
                    <strong> Mục tiêu</strong>
                    <span> Tăng cường cảm nhận hạnh phúc</span>
                    <div>
                      <Link to="/studenthome/Rlla" className="text-orange-400">
                        Tìm hiểu thêm
                      </Link>
                    </div>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <PaginationRounded />
        </div>
      
      </div>
    </>
  );
};

export default Skcx;
