import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import api from "../config/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    accName: "",
    accEmail: "",
    accPass: "",
    dob: new Date("2025-02-19T06:56:28.116Z"),
    gender: true,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (activeTab === "register") {
      if (!formData.accName) newErrors.accName = "Full name is required";
      if (!formData.accEmail) {
        newErrors.accEmail = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.accEmail)) {
        newErrors.accEmail = "Email is invalid";
      }
    }
    if (!formData.accEmail) newErrors.accEmail = "Email is required";
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newErrors = validateForm();
  //   if (Object.keys(newErrors).length === 0) {
  //     try {
  //       if (activeTab === "login") {
  //         const response = await api.post("Account/Login", {
  //           email: formData.accEmail,
  //           password: formData.accPass,
  //         });
  //         console.log("Response:", response);
  //         if (response.status === 200) {
  //           const { token } = response.data.data;
  //           localStorage.setItem("token", token);
  //           navigate("/homepage");
  //         } else {
  //           toast.error("Login failed. Please try again.");
  //         }
  //       } else {
  //         const response = await api.post("Account/Register", formData);
  //         console.log("register",response);
  //         toast.success("Registration successful");
  //         setFormData({
  //           accName: "",
  //           accEmail: "",
  //           accPass: "",
  //           dob: "",
  //           gender: true,
  //         });
  //         setActiveTab("login");
  //       }
  //       setErrors({});
  //     } catch (err) {
  //       toast.error(
  //         err.response?.data?.message || "Request failed. Please try again."
  //       );
  //     }
  //   } else {
  //     setErrors(newErrors);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      if (activeTab == "login") {
        console.log("login",formData);
        try {
          const response = await api.post("Account/Login", formData);
          console.log(response.data);
        
          if (response.data && response.data.data) {
            const { token } = response.data.data;
            localStorage.setItem("token", token);
            navigate("/homepage");
          } else {
            toast.error("Invalid response from server");
          }
        } catch (err) {
          console.error(err.response?.data || err.message);
          toast.error(err.response?.data?.message || "Login failed. Please try again.");
        }
        try {
          const response = await api.post("Account/Register", formData);
          console.log("Register response:", response.data);
          toast.success("Registration successful");
          setFormData({
            accName: "",
            accEmail: "",
            accPass: "",
            dob: "",
            gender: true,
          });
          setActiveTab("login");
        } catch (err) {
          console.error(err.response?.data || err.message);
          toast.error(err.response?.data?.message || "Register failed. Please try again.");
        }
        setErrors({});
      }
    } else {
      setErrors(newErrors);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-center">
          <img
            className="h-12 w-auto"
            src="https://images.unsplash.com/photo-1633409361618-c73427e4e206"
            alt="Logo"
          />
        </div>

        <div className="flex border-b border-gray-200">
          <button
            className={`flex-1 py-4 px-6 text-center ${activeTab === "login"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-gray-700"
              }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`flex-1 py-4 px-6 text-center ${activeTab === "register"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-gray-700"
              }`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {activeTab === "login" && (
            <>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-400" />
                  </div>

                  <input
                    type="email"
                    name="email"
                    value={formData.accEmail}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-2 border ${errors.accEmail ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                {errors.accEmail && (
                  <p className="mt-2 text-sm text-red-600">{errors.accEmail}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    name="accPass"
                    value={formData.accPass}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-2 border ${errors.accPass ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                {errors.accPass && (
                  <p className="mt-2 text-sm text-red-600">{errors.accPass}</p>
                )}
              </div>
            </>
          )}

          {activeTab === "register" && (
            <>
              <div>
                <label
                  htmlFor="accName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="accName"
                    id="accName"
                    value={formData.accName}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-2 border ${errors.accName ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                {errors.accName && (
                  <p className="mt-2 text-sm text-red-600">{errors.accName}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="accEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="accEmail"
                    value={formData.accEmail}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-2 border ${errors.accEmail ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />

                </div>
                {errors.accEmail && (
                  <p className="mt-2 text-sm text-red-600">{errors.accEmail}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    name="accPass"
                    id="password"
                    value={formData.accPass}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-2 border ${errors.accPass ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                {errors.accPass && (
                  <p className="mt-2 text-sm text-red-600">{errors.accPass}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date of Birth
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className={`block w-full pl-3 pr-3 py-2 border ${errors.dob ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                {errors.dob && (
                  <p className="mt-2 text-sm text-red-600">{errors.dob}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <select
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gender: e.target.value === "true",
                      })
                    }
                    className={`block w-full pl-3 pr-3 py-2 border ${errors.gender ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  >
                    <option value={true}>Male</option>
                    <option value={false}>Female</option>
                  </select>
                </div>
                {errors.gender && (
                  <p className="mt-2 text-sm text-red-600">{errors.gender}</p>
                )}
              </div>
            </>
          )}

          <div>
            <button
              type="submit"
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            >
              {activeTab === "login" ? "Sign In" : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
