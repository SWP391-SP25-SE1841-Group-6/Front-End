import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../config/axios";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    accName: "",
    accPass: "",
    accEmail: "",
    dob: new Date('2025-02-17T16:40:55.902Z').toISOString().split('T')[0],  
    gender: true,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (activeTab === "register") {
      if (!formData.accName) newErrors.accName = "Username is required";
      if (!formData.accEmail) {
        newErrors.accEmail = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.accEmail)) {
        newErrors.accEmail = "Email is invalid";
      }
      if (!formData.accPass) {
        newErrors.accPass = "Password is required";
      } else if (formData.accPass.length < 6) {
        newErrors.accPass = "Password must be at least 6 characters";
      }      
    }

    if (!formData.accEmail) newErrors.accEmail = "Email is required";
    if (!formData.accPass) {
      newErrors.accPass = "Password is required";
    } else if (formData.accPass.length < 6) {
      newErrors.accPass = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
   
    if (Object.keys(newErrors).length === 0) {
      try {
        console.log("login",formData)
        let response;
        if (activeTab === "login") {
          response = await api.post("Account/Login", {
            email: formData.accEmail,
            password: formData.accPass,
          });
          const { token } = response.data.data;
          localStorage.setItem("token", token);
          navigate("/homepage");
        } else {
          response = await api.post("Account/Register", {
            accName: formData.accName,
            accPass: formData.accPass,
            accEmail: formData.accEmail,
            dob: formData.dob,
            gender: formData.gender,
          });
          toast.success("Registration successful! Please login.");
          setActiveTab("login");
          setFormData({
            accName: "",
            accPass: "",
            accEmail: "",
            dob: "",
            gender: true,
            confirmPassword: "",
          });
        }
        console.log("API Response:", response?.data);
      } catch (error) {
        console.error("API Error:", error);
        if (error.response && error.response.data) {
          toast.error(error.response.data);
        } else if (error.message) {
          toast.error(error.message);
        } else {
          toast.error("An error occurred. Please try again later.");
        }
      } finally {
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
            className={`flex-1 py-4 px-6 text-center ${
              activeTab === "login"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`flex-1 py-4 px-6 text-center ${
              activeTab === "register"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {activeTab === "register" && (
            <>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  UserName
                </label>
                <input
                  type="text"
                  name="accName"
                  id="accName"
                  value={formData.accName}
                  onChange={handleChange}
                  className={`block w-full pl-3 py-2 border ${
                    errors.accName ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
                />
                {errors.accName && (
                  <p className="mt-2 text-sm text-red-600">{errors.accName}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="accEmail"
                  id="accEmail"
                  value={formData.accEmail}
                  onChange={handleChange}
                  className={`block w-full pl-3 py-2 border ${
                    errors.accEmail ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
                />
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
                <input
                  type="password"
                  name="accPass"
                  id="password"
                  value={formData.accPass}
                  onChange={handleChange}
                  className={`block w-full pl-3 py-2 border ${
                    errors.accPass ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
                />
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
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded-md"
                />
                {errors.dob && (
                  <p className="mt-2 text-sm text-red-600">{errors.dob}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded-md"
                >
                  <option value={true}>Male</option>
                  <option value={false}>Female</option>
                </select>
              </div>
            </>
          )}
          {activeTab === "login" && (
            <>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="accEmail"
                  id="accEmail"
                  value={formData.accEmail}
                  onChange={handleChange}
                  className={`block w-full pl-3 py-2 border ${
                    errors.accEmail ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
                />
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
                <input
                  type="password"
                  name="accPass"
                  id="password"
                  value={formData.accPass}
                  onChange={handleChange}
                  className={`block w-full pl-3 py-2 border ${
                    errors.accPass ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
                />
                {errors.accPass && (
                  <p className="mt-2 text-sm text-red-600">{errors.accPass}</p>
                )}
              </div>
            </>
          )}

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              {activeTab === "login" ? "Sign In" : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
