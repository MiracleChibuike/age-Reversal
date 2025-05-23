import {React, useState} from "react";
import hero from "../assets/heroImages/hero.svg";
import heroBanner from "../assets/heroImages/heroBanner.svg";
import headerLine from "../assets/heroImages/headerLine.svg";
import "./Nav.css";
const Hero = () => {
    return (
      <>
        <div
          className="heroContainer"
          style={{
            // minHeight: "100vh",
          }}>
          <div className="heroText" style={{ margin: "100px 0 0 0" }}>
            <h2
              style={{
                fontWeight: "900",
                lineHeight: "100%",
                fontSize: "4rem",
              }}>
              LOOK YOUR BEST
            </h2>
            <p style={{ fontWeight: "400"}}>
              At Age Reversal Clinic, we believe there's no shame <br /> in
              wanting to look your best. Located in Grove Park, <br /> South
              East London, and Brentwood, Essex, our <br /> friendly team is
              here to help you feel fabulous.
            </p>
          </div>
          <div className="heroBanner" style={{ display: "flex" }}>
            <img src={headerLine} style={{marginRight: "5px"}} id="headerLine" alt="" />
            <img src={heroBanner} id="banner" alt="" />
          </div>
        </div>
      </>
    );
};

export default Hero;