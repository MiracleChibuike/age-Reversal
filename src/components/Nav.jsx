import { react, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
  const containerRef = useRef(null);
  const [isSticky, setIssticky] = useState(false)
  const menuClick = useRef(null);
  const navigation = useRef(null);
  const [isNavVisible, setIsNavVisible] = useState(false)
  // Handle Navigation Open and Close Function
  const navOpen = () => {
    setIsNavVisible(prev => !prev)
  };
  // Function to close Nav Menu when a user clicks outside box
  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (
        menuClick.current &&
        !menuClick.current.contains(event.target) &&
        navigation.current &&
        !navigation.current.contains(event.target)
      ) {
        setIsNavVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutSideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, []);
  // Swithc
  useEffect(() => {
    const sendToTop = () => {
      if (window.scrollY > 10) {
        // alert("sure")
        setIssticky(true)
        // navigation.current.
      }else{
        setIssticky(false)
      }
    };

    window.addEventListener("scroll", sendToTop);
    return () => {
      window.removeEventListener("scroll", sendToTop)
    }

  }, []);
  const servicesNavigate = useNavigate();

  const navigateServices = () => {
    servicesNavigate("/Services");
  }
    return (
      <>
        <div
          className={`navContainer ${isSticky ? "sticky" : ""} `}
          ref={containerRef}>
          <div className="naviGation">
            <h2>Welcome to Age Reversal Clinic</h2>
            <div
              className="menuClick"
              ref={menuClick}
              style={{ margin: "0 10px" }}>
              <i
                className="fa-solid fa-bars"
                onClick={navOpen}
                style={{ fontSize: "22px", cursor: "pointer" }}></i>
            </div>
            <div
              className={`navigationLinks ${
                isNavVisible ? "visible" : "hidden"
              }`}
              ref={navigation}>
              <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li onClick={navigateServices}>SERVICES</li>
                <li>BOOK</li>
                <li>BLOG</li>
                <li>CONTACT</li>
              </ul>
            </div>
          </div>
        </div>
        {/* This is to be trigered on Mobile */}
      </>
    );

};

export default Nav;
