import React, { useContext } from "react";
import { ThemeContext, UserContext } from "../App";
import { themes } from "../data";

const Navbar = ({setIsOpen}) => {
  
  const { setLoggedIn,uploadedImage } = useContext(UserContext);
    const {setTheme,theme}=useContext(ThemeContext)
    const handleTheme=(theme)=>{
      setTheme(theme)
      sessionStorage.setItem("theme",JSON.stringify(theme))
    }

    
    const handleLogout=()=>{
      sessionStorage.clear();
      setLoggedIn(false)
    }
  return (
    <div className=" w-full m-auto max-w-[1400px] px-2 py-5 flex items-center justify-between">
      <div
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center w-16 h-16 border rounded-full cursor-pointer"
      >
        {uploadedImage ? (
          <img
            src={uploadedImage}
            className="object-cover w-full h-full rounded-full"
            alt=""
          />
        ) : (
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            className="object-cover w-full h-full rounded-full"
            alt=""
          />
        )}
      </div>

      <div className="flex items-center gap-4">
        {themes.map((data, i) => {
          // console.log(theme.color1)
          return (
            <div
              key={i}
              className={`${
                theme.color1 === data.color1
                  ? "border-2  border-white p-[2px] rounded-full"
                  : "border-none"
              }`}
            >
              <div
                onClick={() => handleTheme(data)}
                style={{
                  backgroundImage: `linear-gradient(239.26deg,${data.color1} 63.17%,${data.color2} 94.92%)`,
                }}
                className="flex items-center justify-center w-6 h-6 border rounded-full shadow-md "
              ></div>
            </div>
          );
        })}

        {/* <div
          onClick={() => handleTheme("light")}
          className="flex items-center justify-center w-10 h-10 border rounded-full shadow-md bg-cyan"
        ></div>
        <div
          onClick={() => handleTheme("red")}
          className="flex items-center justify-center w-10 h-10 border rounded-full shadow-md bg-red"
        ></div>
        <div
          onClick={() => handleTheme("blue")}
          className="flex items-center justify-center w-10 h-10 border rounded-full shadow-md bg-blue"
        ></div>
        <div
          onClick={() => handleTheme("dark")}
          className="flex items-center justify-center w-10 h-10 bg-black border rounded-full shadow-md"
        ></div> */}
      </div>
      <button
        className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
