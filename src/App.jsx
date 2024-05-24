import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Chat from "./pages/Chat";
import Navbar from "./components/Navbar";
import LoginForm from "./pages/Login";
import { Navigate, Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

export const ThemeContext = createContext({});
export const UserContext=createContext({});

function App() {
  const [theme, setTheme] = useState({ color1: "#DDEEED", color2: "#FDF1E0" });
  const [loggedIn,setLoggedIn]=useState(false)
  const [uploadedImage,setUploadedImage]=useState(null)
  useEffect(() => {
    console.log(JSON.parse(sessionStorage.getItem("theme")));
    sessionStorage.getItem("theme")
      ? setTheme(JSON.parse(sessionStorage.getItem("theme")))
      : setTheme({
          bubble: "#ffffff",
          color1: "#DDEEED",
          color2: "#FDF1E0",
          text: "#000000",
        });

      sessionStorage.getItem("user")
        ? (setLoggedIn(JSON.parse(sessionStorage.getItem("user")).loggedIn),setUploadedImage(JSON.parse(sessionStorage.getItem("user")).uploadedImage))
        : setLoggedIn(false);
  }, []);

  return (
    <>
      <UserContext.Provider value={{loggedIn,setLoggedIn,uploadedImage,setUploadedImage}}>
        <ThemeContext.Provider value={{ setTheme, theme }}>
          {/* <Chat/> */}
          {/* <LoginForm /> */}
          <BrowserRouter>
            <Routes>
              <Route
                path="/login"
                element={
                  <LoginForm loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                }
              />

              <Route
                path="/"
                element={loggedIn ? <Chat /> : <Navigate to="/login" />}
              />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
