import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import GoToTop from "./GoToTop";
import { FaAngleUp } from "react-icons/fa";
import { Routes, Route } from "react-router-dom";

function App() {
  const [Class, setClass] = useState("hide-btn");
  const SettingBtn = useCallback(() => {
    let winHeight = window.scrollY;
    if (window !== undefined) {
      return winHeight > 350 ? setClass("fixed-top-btn") : setClass("hide-btn");
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", SettingBtn);
    return () => window.removeEventListener("scroll", SettingBtn);
  }, [SettingBtn]);
  return (
    <div id="App" className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/singleroom/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <GoToTop />
      <a href="#App">
        <button className={`${Class}`}>
          <FaAngleUp />
        </button>
      </a>
    </div>
  );
}

export default App;
