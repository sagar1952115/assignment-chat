import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";

const LoginForm = ({setLoggedIn,loggedIn}) => {

    

    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Reset the error message when the user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    const { email, password } = formData;
    let newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Submit the form
      sessionStorage.setItem("user",JSON.stringify({loggedIn:true,uploadedImage:null}))
      setLoggedIn(true)
      navigate("/");
      console.log("Form submitted:", formData);
    }
  };

  if(loggedIn){
    return <Navigate to="/"/>;
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="mb-6 text-3xl font-semibold">Login Page</h2>
      <form
        className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.email ? "border-red-500" : "border-gray-200"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-xs italic text-red-500">{errors.email}</p>
          )}
        </div>
        <div className="relative mb-6">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <div className="flex border border-gray-200 rounded">
            <input
              className={`w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                errors.password ? "border-red-500" : "border-gray-200"
              }`}
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="px-3 text-gray-700 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14v2m0-10v2m0 4v2m-7-7l14 14"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14v2m0-10v2m0 4v2m-7-7l14 14"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs italic text-red-500">{errors.password}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
