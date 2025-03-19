import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faCircleXmark,
  faClock,
  faHandshake,
  faHeartCirclePlus,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";


const IntroPageStudent = () => {
  return (
    <div className="bg-gray-100   ">
      <div className="row flex " >
        <div className="col-6 w-[60%] ml-2 ">
          <div className="grid grid-cols-2 grid-rows-2  gap-4 m-2 rounded-full w-360 h-250">
            <div
              className=" relative bg-cover bg-center bg-no-repeat text-white rounded-lg p-4 flex flex-col items-center"
              style={{
                backgroundImage:
                  "url(https://files.123freevectors.com/wp-content/original/163911-abstract-pink-blue-and-white-graphic-background-design.jpg)",
              }}
            >
              <div className="absolute inset-0 rounded-lg text-9xl  ">
                <FontAwesomeIcon
                  icon={faBrain}
                  className="m-10 text-blue-900"
                />
              </div>

              <Link to="/studenthome/Sknt">
                <p className="relative text-6xl w-100 mr-30 mt-45 text-blue-900 text-center  rounded-3xl font-bold ">
                  SỨC KHỎE NHẬN THỨC
                </p>
              </Link>
            </div>

            <div
              className="relative bg-cover bg-center bg-no-repeat text-white rounded-lg p-4 flex flex-col items-center"
              style={{
                backgroundImage:
                  "url(https://static.vecteezy.com/system/resources/previews/040/520/293/non_2x/purple-abstract-modern-geometric-memphis-background-vector.jpg)",
              }}
            >
              <div className="absolute inset-0    text-9xl rounded-lg">
              <FontAwesomeIcon
               icon={faHandshake} 
                  className="m-10 text-white"
              />
              </div>

              <Link to="/studenthome/Skxh">
              <p className="relative text-6xl w-100 mr-10 mt-45 text-white text-center  rounded-3xl font-bold ">
                  SỨC KHỎE XÃ HỘI
                </p>
              </Link>
              
          
            </div>

            <div
              className="relative bg-cover bg-center bg-no-repeat text-white rounded-lg p-4 flex flex-col items-center"
              style={{
                backgroundImage:
                  "url(https://static.vecteezy.com/system/resources/previews/040/520/293/non_2x/purple-abstract-modern-geometric-memphis-background-vector.jpg)",
              }}
            >
              <div className="absolute inset-0    text-9xl rounded-lg">
              <FontAwesomeIcon icon={faHeartCirclePlus} 
                  className="m-10 text-white"
              />
              </div>

              <Link to="/studenthome/Skcx">
              <p className="relative text-6xl w-100 mr-10 mt-45 text-white text-center  rounded-3xl font-bold ">
                  SỨC KHỎE CẢM XÚC
                </p>
              </Link>
              
          
            </div>

            <div
              className=" relative bg-cover bg-center bg-no-repeat text-white rounded-lg p-4 flex flex-col items-center"
              style={{
                backgroundImage:
                  "url(https://files.123freevectors.com/wp-content/original/163911-abstract-pink-blue-and-white-graphic-background-design.jpg)",
              }}
            >
              <div className="absolute inset-0 rounded-lg text-9xl  ">
                <FontAwesomeIcon
                  icon={faBrain}
                  className="m-10 text-blue-900"
                />
              </div>

              <Link to="/studenthome/Sktc">
                <p className="relative text-6xl w-100 mr-30 mt-45 text-blue-900 text-center  rounded-3xl font-bold ">
                  SỨC KHỎE THỂ CHẤT
                </p>
              </Link>
            </div>
            <div className="absolute bg-white w-90 h-90  ml-130 mt-50 rounded-full bg-conic-120 from-indigo-300 via-indigo-50 to-indigo-300"
           >
              <div className="text-5xl m-10 mt-30 text-center text-black font-bold ">
                <p>SỨC KHỎE TÂM LÍ</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-6">
          <div>
            <p className=" text-8xl text-blue-900">SỨC KHỎE TÂM LÍ</p>
            <p className="mt-5 mr-25 text-3xl text-center">
              Dành 5 phút để tìm hiểu về sức khỏe tâm lí của bạn
            </p>
          </div>
          <div className="text-3xl mt-20 bg-blue-950 !w-70m run decoration-violet-50  p-3 h-15  rounded-xl ">
            <Link to="/studenthome/test" className=" !text-white !p-6 ">
           
              BẮT ĐẦU NGAY
            </Link>
          </div>
          <div className="flex mt-20 justify-between text-2xl text-blue-950 font-bold cursor-pointer">
          <Link to="/studenthome/khaosat" className="!text-blue-900" >
              <FontAwesomeIcon icon={faClock} className="!text-blue-900"/>  Bỏ qua khảo sát
            </Link>
            <Link to="/studenthome/hengap" className="!text-blue-900" >
            <FontAwesomeIcon icon={faCircleXmark}  className="!text-blue-900"/> Hẹn gặp
            </Link>
            
            <Link to="/studenthome/khancap" className="!text-blue-900" >
            <FontAwesomeIcon icon={faPhone}  className="!text-blue-900"/> Khần cấp
            </Link>
       

          </div>
        </div>
      </div>
      
      <div className="mt-5 w-full">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default IntroPageStudent;
