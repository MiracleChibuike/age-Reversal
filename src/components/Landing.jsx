
import {react, useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import translate from "../assets/headerImages/translate.svg";
import user from "../assets/headerImages/user.svg";
import search from "../assets/headerImages/search.svg";
import "./Landing.css";
import Nav from "./Nav";
import Hero from "./Hero";
import WhyChoose from "./WhyChoose";
import Services from "./Services";
import Consultation from "./Consultation";
import Footer from "./Footer";
import favIcon from "../assets/Hair-services-icon-webp.webp";
const Landing = () => {

    return (
      <>
        <Helmet>
          <title>Relaxing Spa & Manicure Services | Age Reversal Clinic</title>
          <link rel="shortcut icon" href={favIcon} type="image/x-icon" />
          <meta
            name="description"
            content="Experience top-rated spa and manicure treatments that leave your skin glowing and your nails flawless. Book your pampering session today at Age Reversal Clinic."
          />
          <meta
            name="Keywords"
            keywords="spa services, manicure, nail care, beauty treatments, relaxation, Age Reversal Clinic hand massage, nail polish, skin rejuvenation"
          />
          <meta name="author" content="Age Reversal Clinic" />

          {/* Open Graph For Social Media */}
          <meta
            property="og:ttile"
            content="Relaxing Spa & Manicure Services | GlowUp Beauty Lounge"
          />
          <meta
            property="og:description"
            content="Indulge in luxurious spa and manicure treatments. Let your skin and nails shine."
          />
          <meta property="og:type" content="website" />
          {/* Pass actual website URL Here */}
          <meta property="og:url" content="" />
          {/* Pass actual Favicon/logo gere */}
          <meta property="og:image" content="" />
        </Helmet>

        {/* Home Container */}
        {/* To show On Mobile Top */}
        <div className="mobileHeader">
          <div className="logo">
            <h2>Age</h2>
          </div>
          <div className="actionsMobile">
                <img
                  src={translate}
                  alt=""
                  style={{ margin: "0 10px", width: "30px" }}
                />
              
                 <i
                  className="fa-solid fa-magnifying-glass"
                  style={{
                    margin: "0 5px",
                    fontSize: "22px",
                    position: "relative",
                    top: "-5px",
                  }}></i>
          </div>
        </div>
        <div className="landing">
          <div className="headerBanner">
            <div className="headerInfo">
              <div>Hair • Beauty • Medical</div>
            </div>
            {/* for translate and search */}
            <div className="actionHeader">
              <div className="translate">
                <img src={translate} alt="" />
                <span>English</span>
              </div>
              <div className="user">
                <img src={user} alt="" />
                <span>LogIn</span>
              </div>
              <div className="search">
                <input type="search" id="searchContent" placeholder="Search" />
                <img src={search} id="searchIcon" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Import Nav Component */}
        <Nav />
        {/* Import The Hero Component */}
        <Hero />
        {/* Import Why Choose Us Component */}
        <WhyChoose />
        {/* Import Services Section */}
        <Services />
        {/* Import Consultation section here */}
        <Consultation />
        {/* Import Footer */}
        <Footer/>
      </>
    );
};

export default Landing;