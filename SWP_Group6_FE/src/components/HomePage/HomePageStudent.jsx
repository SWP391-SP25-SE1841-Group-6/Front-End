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
import { useNavigate } from "react-router-dom";

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
    title: "Professional Training and Psychology Services",
  },
  {
    src: "https://tamlyvietphap.vn/wp-content/uploads/2025/01/dichvuthamvantamly-300x168.png",
    title: "Counseling and Therapy Services",
  },
  {
    src: "https://tamlyvietphap.vn/wp-content/uploads/2025/01/dichvutamlydoanhnghiep-300x168.png",
    title: "Corporate Psychology Services",
  },
  {
    src: "https://tamlyvietphap.vn/wp-content/uploads/2025/01/dichvutamlyhocduong-300x168.png",
    title: "School Psychology Services",
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
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const HomePageStudent = () => {
  const navigate = useNavigate();
  console.log("role: " + localStorage.getItem("role"));
  const handleClick = () => {
    navigate("/contact"); // Chuyển đến trang /contact
  };
  return (
    <div className="bg-gray-200">
      <div className="text ml-100 mt-2 w-full h-full">
        <div className="row flex flex-cols-2 flex-row-2">
          <div className="flex-col-4">
            <div className="title col-1">
              <h3 className="flex font-bold text-red-500">Introduction</h3>
              <p className="text-2xl text-sky-900 font-bold">ABOUT US</p>
              <span className="text-2xl">
                -GROUP6 Psychology Institute was established according to
                Science and Technology Enterprise Certificate No. B-16/2019ĐK-KHCN
                dated June 5, 2019, issued by Ho Chi Minh City Department of
                Science and Technology.
              </span>
            </div>

            <div className="title2 ml-1">
              <div className="grid-cols-2 grid-row-2 flex">
                <div className="text-9xl text-red-600 m-5">
                  <FontAwesomeIcon icon={faFire} />
                </div>
                <div>
                  <h4 className="text-red-500">Fields of Operation</h4>
                  <p className="text-2xl">
                    GROUP6 Psychology Institute operates in the following areas:
                    <br />
                    -Psychological Research
                    <br />
                    -Expert Training
                    <br />
                    -Psychological Therapy Services
                    <br />
                    -Aiming to improve mental health in Vietnam
                  </p>
                </div>
              </div>

              <div className="grid-cols-2 grid-row-2 flex">
                <div className="text-9xl text-blue-700 m-5">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div>
                  <h4 className="text-blue-500">Core Values</h4>
                  <p className="text-2xl">
                    -Confidentiality
                    <br /> –Dedication <br />
                    –Professionalism
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-250 h-150 m-5">
            <img
              src="https://plus.unsplash.com/premium_photo-1661308281704-f5b562260e1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHN5Y2hvbG9naWNhbCUyMGNvbnN1bHRhbnR8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="service my-10 px-4">
        <div className="row flex flex-col md:flex-row gap-8">
          <div className="col-6 flex flex-col justify-center items-center">
            <h4 className="text-red-400">Services</h4>
            <h3 className="text-sky-600 text-2xl font-bold my-2">Our Services</h3>
            <p className="text-2xl text-center">
              Providing professional, comprehensive, personalized psychological
              solutions to enhance mental health.
            </p>
          </div>

          <div className="col-6 w-full">
            <Slider {...settings} className="px-4">
              {images.map((image, index) => (
                <div key={index} className="px-2">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto object-cover"
                  />
                  <h5 className="text-center mt-2">{image.title}</h5>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="happy bg-sky-800 w-full h-20 text-white flex justify-center">
        <h4>"YOUR HAPPINESS - OUR MISSION"</h4>
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
          <h4 className="text-red-500 font-bold">Featured</h4>
          <h3 className="text-blue-600 font-bold">WHY CHOOSE US</h3>
          <p className="text-4xl">
            Proud to be a reputable institution with experienced experts,
            <br />
            scientific methods, and dedicated service. GROUP6 Psychology
            Institute
            <br />
            is committed to providing optimal solutions, effectively meeting
            <br />
            all mental health needs.
          </p>
          <div className="mt-5">
            <p className="text-3xl p-2">
              <FontAwesomeIcon icon={faShield} className="text-blue-700 pr-2" />
              Expert team trained at prestigious universities nationally and
              internationally.
            </p>
            <p className="text-3xl p-2">
              <FontAwesomeIcon icon={faStar} className="text-blue-700 pr-2" />
              Scientific methods, personalized to suit each individual.
            </p>
            <p className="text-3xl p-2">
              <FontAwesomeIcon
                icon={faChalkboardUser}
                className="text-blue-700 pr-2"
              />
              Modern, safe, and professional therapy space.
            </p>
            <p className="text-3xl p-2">
              <FontAwesomeIcon icon={faShield} className="text-blue-700 pr-2" />
              Absolute confidentiality of customer information.
            </p>
          </div>
        </div>
      </div>
      <div className="guest w-full h-auto">
        <div className="content flex flex-col h-110 bg-sky-200 items-center justify-center text-center">
          <h5 className="text-red-600 font-bold">Customer Experience</h5>
          <h4 className="font-bold text-sky-900">CUSTOMER FEEDBACK</h4>
          <p className="text-xl">
            Customer feedback is proof of our quality and dedication,
            <br />
            and a motivation to continuously improve every day.
          </p>
          <div className="flex flex-col-3 flex-row-3 mt-5 gap-3">
            <div className="comment1 w-[28%]">
              <div className="text-yellow-500 text-2xl">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <h5>Student Nguyen Van …</h5>
              <p className="text-lg font-bold">
                “Thanks to the dedicated support of experts at GROUP6 Psychology
                Institute, I have overcome stress and regained balance in life.
                Truly grateful!”
              </p>
            </div>

            <div className="comment1 w-[28%]">
              <div className="text-yellow-500 text-2xl">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <h5>Customer Le Thi…</h5>
              <p className="text-lg font-bold">
                “The service here is very professional and attentive. I felt
                safe and comfortable throughout the therapy process.”
              </p>
            </div>

            <div className="comment1 w-[28%]">
              <div className="text-yellow-500 text-2xl">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <h5>Psychological Counseling Client …</h5>
              <p className="text-lg font-bold">
                “I am impressed with the modern space and scientific working
                methods of the Institute. This is where I found empathy and
                solutions for my problems.”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lecture py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h5 className="text-red-700">Experts</h5>
            <p className="text-2xl font-bold text-blue-900 my-2">
              OUR EXPERT TEAM
            </p>
            <p className="text-xl font-bold max-w-3xl mx-auto">
              Experienced, dedicated, and professional experts, always
              accompanying you to find balance and happiness.
            </p>
          </div>

          <div className="w-full">
            <Slider {...settings} className="mx-4">
              {Profiles.map((profile, index) => (
                <div key={index} className="px-4">
                  <div className="flex flex-col items-center">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-40 h-40 rounded-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <h5 className="text-center mt-4 font-semibold">
                      {profile.name}
                    </h5>
                    <p className="text-center text-sm text-gray-600">
                      {profile.specialization}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="mt-5 m-auto flex justify-center">
        <button
          onClick={handleClick}
          className="mr-auto w-30 h-10 border-w-1px rounded-full border border-red-600 bg-red-600 text-white font-bold cursor-pointer"
        >
          Details
        </button>
      </div>

      <div className="row flex justify-center mt-10">
        <div className="col-6 w-150 h-140">
          <div className="text-3xl">
            <h5 className="text-red-600 text-xl font-bold">Knowledge</h5>
            <h4 className="text-blue-700 font-bold">PSYCHOLOGY PAGE</h4>
            <p className="font-bold text-xl">
              Explore psychology from the roots to the depth of expertise
              <br /> with GROUP6 Psychology Institute.
            </p>
            <span className="text-xl">
              With GROUP6 Psychology Institute, you will enter the world of
              psychology with useful and accessible articles and shares. Here,
              you can learn about human psychology, learn how to manage
              emotions, improve mental health, and apply them to life.
              <br />
              Whether you are an expert or seeking support, this journey
              <br />
              will help you understand yourself better and connect meaningfully
              with those around you.
            </span>
          </div>
          <div className="mt-10 ml-5 m-auto flex border-red-400 text-lg">
            <button className="mr-auto w-30 h-10 border-w-1px rounded-full border border-red-600 bg-red-600 text-white font-bold cursor-pointer">
              Details
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
            Partners
          </p>
          <p className="flex justify-center text-3xl mt-2 font-bold text-sky-800">
            OUR PARTNERS
          </p>
        </div>
        <div className="flex gap-20 m-auto p-10 mt-5 overflow-hidden justify-center">
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

      <div className="contactt bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h4 className="text-blue-700 text-2xl font-bold mb-6">
                What problem are you facing?
              </h4>
              <div className="space-y-4 text-xl">
                <p>- Anxiety Disorders</p>
                <p>- Attention Deficit Hyperactivity Disorder – ADHD</p>
                <p>- Depression</p>
                <p>- Post-Traumatic Stress Disorder – PTSD</p>
                <p>- Autism</p>
                <p className="font-bold mt-6">COME TO US IMMEDIATELY</p>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-3xl font-bold mb-4 text-center text-blue-800">
                  Contact us
                </h4>
                <form className="space-y-4">
                  <div>
                    <label className="block text-lg font-black text-black">
                      Customer Name:
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 w-full bg-white rounded-md p-2 text-lg border-amber-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-black">
                      Address
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-black">
                      Phone Number
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
                      placeholder="What help do you need?"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full h-11 bg-orange-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePageStudent;
