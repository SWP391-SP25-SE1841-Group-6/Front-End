import { Link } from "react-router-dom";

const Meet = () => {
  return (
    <div className="meet  ">
      <div className="m-auto border-2 w-200 h-250 rounded-xl bg-gray-100 cursor-pointer">
        <h2 className="text-center">Liên hệ với</h2>
        <div className="grid-cols-1 grid-rows-2 flex mt-10 justify-center gap-5  ">
          <button className="border-2 w-80 h-80 rounded-xl bg-white">
            <img
              className="mt-10 text-center m-auto w-40 h-40 "
              src="https://cdn-icons-png.flaticon.com/128/4832/4832469.png"
              alt=""
            />
            <p className="text-3xl text-center mt-10 text-gray-400 font-bold">
              Giáo viên chủ nhiệm
            </p>
          </button>

          <button className="border-2 w-80 h-80 rounded-xl bg-white cursor-pointer">
            <img
              className="mt-10 text-center m-auto w-40 h-40 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqoOuXTSXt5egcGS7Bd-jZCFFhaQEkjttMCT1xKuxswlR5dB6XICSbqC0r0UkN8uIkte4&usqp=CAU"
              alt=""
            />
            <p className="text-3xl text-center mt-10 text-gray-400 font-bold">
              Chuyên viên tâm lí
            </p>
          </button>
        </div>
        <div>
          <p className="text-4xl text-center mt-10 mb-5">
            Để lại lịch hẹn hoặc lời nhắn
          </p>
        </div>
        <form className="bg-white border w-170 h-60 m-auto flex flex-col items-center justify-start p-4 rounded-lg ">
          <input
            type="text"
            placeholder="Chúng tôi có thể giúp thì cho em ?"
            className="w-full border p-2 rounded-md outline-none focus:ring-0 focus:border-none font-bold 
             placeholder:text-2xl placeholder:text-black"
          />
        </form>
        <div className=" flex justify-center gap-20 mt-10 text-4xl ">
        <Link to="/studenthome/test" className="border w-40 text-center h-12 !text-white !bg-blue-900"> Quay lại </Link>
           
        <Link className="border w-40 text-center h-12 !text-white !bg-blue-900 forced-colors:bg-orange-400"> Gửi đi </Link> 
           
        </div>
      </div>
    </div>
  );
};

export default Meet;
