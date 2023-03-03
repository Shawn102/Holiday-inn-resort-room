import React, { useState, useRef, useEffect, useCallback } from "react";
import Logo from "../images/hilton1.png";
import { Link } from "react-router-dom";
import { FaAlignRight, FaHome, FaHotel } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fixedClass, setFixedClass] = useState(null);
  const [heightOfNav, setHeightOfNav] = useState(null);
  const navHeight = useRef(null);
  const DivContainerLinks = useRef(null);
  const LinksContainer = useRef(null);
  // This useEffect for toggle navbar
  useEffect(() => {
    const UlHeight = LinksContainer.current.getBoundingClientRect().height + 10;
    if (isOpen) {
      DivContainerLinks.current.style.height = `${UlHeight}px`;
    } else {
      DivContainerLinks.current.style.height = "0px";
    }
  }, [isOpen]);
  //this useEffect for fixed navbar
  const SettingClass = useCallback(() => {
    let windowHeight = window.scrollY;
    if (window !== undefined) {
      return windowHeight > heightOfNav
        ? setFixedClass("fixed-nav")
        : setFixedClass(null);
    }
  }, [heightOfNav]);
  useEffect(() => {
    const NavHeight = navHeight.current.getBoundingClientRect().height + 10;
    setHeightOfNav(NavHeight);
    window.addEventListener("scroll", SettingClass);
    return () => window.removeEventListener("scroll", SettingClass);
  }, [SettingClass]);
  return (
    <nav className={`${fixedClass}`} ref={navHeight}>
      <div className="nav">
        <div className="header-nav-logo">
          <img src={Logo} alt="" className="logo-nav" />
          <button onClick={() => setIsOpen((previous) => !previous)}>
            <FaAlignRight />
          </button>
        </div>
        <div className="divContainer" ref={DivContainerLinks}>
          <ul ref={LinksContainer}>
            <li>
              <Link to="/" className="links-nav">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="links-nav">
                <FaHotel /> Rooms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
