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
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-2 gap-6 relative">
              {/* Mental Health Card */}
              <div className="card-wrapper col-span-2 sm:col-span-1">
                <div className="relative rounded-lg overflow-hidden h-64">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url(https://files.123freevectors.com/wp-content/original/163911-abstract-pink-blue-and-white-graphic-background-design.jpg)"
                    }}
                  />
                  <div className="relative z-10 h-full flex flex-col items-center justify-between p-6">
                    <FontAwesomeIcon
                      icon={faBrain}
                      className="text-6xl text-blue-900"
                    />
                    <Link to="/studenthome/Sknt">
                      <p className="text-2xl lg:text-3xl text-blue-900 font-bold text-center">
                        COGNITIVE HEALTH
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Social Health Card */}
              <div className="card-wrapper col-span-2 sm:col-span-1">
                <div className="relative rounded-lg overflow-hidden h-64">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/040/520/293/non_2x/purple-abstract-modern-geometric-memphis-background-vector.jpg)"
                    }}
                  />
                  <div className="relative z-10 h-full flex flex-col items-center justify-between p-6">
                    <FontAwesomeIcon
                      icon={faHandshake}
                      className="text-6xl text-white"
                    />
                    <Link to="/studenthome/Skxh">
                      <p className="text-2xl lg:text-3xl text-white font-bold text-center">
                        SOCIAL HEALTH
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Emotional Health Card */}
              <div className="card-wrapper col-span-2 sm:col-span-1">
                <div className="relative rounded-lg overflow-hidden h-64">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/040/520/293/non_2x/purple-abstract-modern-geometric-memphis-background-vector.jpg)"
                    }}
                  />
                  <div className="relative z-10 h-full flex flex-col items-center justify-between p-6">
                    <FontAwesomeIcon
                      icon={faHeartCirclePlus}
                      className="text-6xl text-white"
                    />
                    <Link to="/studenthome/Skcx">
                      <p className="text-2xl lg:text-3xl text-white font-bold text-center">
                        EMOTIONAL HEALTH
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Physical Health Card */}
              <div className="card-wrapper col-span-2 sm:col-span-1">
                <div className="relative rounded-lg overflow-hidden h-64">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url(https://files.123freevectors.com/wp-content/original/163911-abstract-pink-blue-and-white-graphic-background-design.jpg)"
                    }}
                  />
                  <div className="relative z-10 h-full flex flex-col items-center justify-between p-6">
                    <FontAwesomeIcon
                      icon={faBrain}
                      className="text-6xl text-blue-900"
                    />
                    <Link to="/studenthome/Sktc">
                      <p className="text-2xl lg:text-3xl text-blue-900 font-bold text-center">
                        PHYSICAL HEALTH
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white rounded-full w-40 h-40 flex items-center justify-center shadow-lg">
                  <p className="text-2xl text-center text-black font-bold p-4">
                    MENTAL HEALTH
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-2/5 flex flex-col justify-center space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl text-blue-900 font-bold mb-4">
                MENTAL HEALTH
              </h1>
              <p className="text-xl lg:text-2xl">
                Take 5 minutes to learn about your mental health
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link 
                to="/studenthome/test"
                className="bg-blue-950 text-white px-8 py-3 rounded-xl text-xl hover:bg-blue-800 transition-colors"
              >
                START NOW
              </Link>
            </div>

          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default IntroPageStudent;
