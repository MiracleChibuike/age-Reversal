import {React, useState} from "react";
import hero from "../assets/heroImages/hero.svg";
import heroBanner from "../assets/heroImages/heroBanner.svg";
import Banner_Webp from "../assets/Banner-webp.webp";
import headerLine from "../assets/heroImages/headerLine.svg";
import "./Nav.css";
const Hero = () => {
    return (
      <>
        <div
          className="heroContainer"
          style={
            {
              // minHeight: "100vh",
            }
          }>
          <div className="heroText" style={{ margin: "100px 0 0 0" }}>
            <h2
              style={{
              
              }}>
              LOOK YOUR <span id="bestTxt">BEST</span>
            </h2>
            <p style={{ fontWeight: "400" }}>
              At Age Reversal Clinic, we believe there's no <br /> shame in
              wanting to look your best. Located <br /> in 
              Grove Park, South East London, and <br /> Brentwood, Essex, our
              friendly team is here <br /> to help you feel fabulous.
            </p>
          </div>
          <div className="heroBanner" style={{ display: "flex" }}>
            <img
              src={headerLine}
              style={{ marginRight: "5px" }}
              id="headerLine"
              alt=""
            />
            <img src={heroBanner} id="banner" alt="" />
          </div>
        </div>
      </>
    );
};

export default Hero;