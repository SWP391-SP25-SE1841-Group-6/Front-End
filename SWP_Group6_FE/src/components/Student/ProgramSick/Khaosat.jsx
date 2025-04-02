import { faUserXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Khaosat = () => {
  return (
    <div className="khaosat">
      <div className="border-2 w-200 h-200 m-auto mt-20 rounded-2xl bg-gray-100">
        <div className="text-center m-10 text-8xl text-blue-950">
          <FontAwesomeIcon icon={faUserXmark} />{" "}
        </div>
        <p className="text-4xl text-center m-10 font-bold">
          Em từ chối làm khảo sát này
        </p>

        <form className="bg-white border w-170 h-80 m-auto flex flex-col items-center justify-start p-4 rounded-lg ">
          <input
            type="text"
            placeholder="Lí do em từ chối làm khảo sát này?"
            className="w-full border p-2 rounded-md outline-none focus:ring-0 focus:border-none font-bold 
             placeholder:text-2xl placeholder:text-black"
          />
        </form>

        <div className=" flex justify-center gap-20 mt-20 text-4xl ">
        <Link
          variant="contained"
          component={Link}
          to="/studenthome"
          className="border w-50 text-center h-12 rounded-lg !text-white !bg-blue-900"
        >
          Quay lại
        </Link>
          <Link
            to="/studenthome/test"
            className="border w-50 text-center h-12 rounded-lg !text-white !bg-blue-900"
          >
            {" "}
            Xác nhận{" "}
          </Link>
     
        </div>
      </div>
    </div>
  );
};

export default Khaosat;
