import React from "react";
import whyChoose from "../assets/heroImages/whyChoose.svg";
import choose2 from "../assets/whyChoose/choose2.svg";
import choose3 from "../assets/whyChoose/choose3.svg"
import "./Landing.css"

const WhyChoose = () => {
    return (
      <>
        <div className="whyChoose">
          <div className="bestInfo">
            <div className="bestClinic">
              <div className="imgDiv">
                <img src={whyChoose} alt="" id="choose" />
              </div>
              <p>
                Our London clinic is directly opposite <br /> Grove Park
                station, just a 15-minute <br /> train ride from London Bridge.
              </p>
            </div>
            <div className="bestScientific">
              <div className="imgDiv">
                <img src={choose2} alt="" id="choose" />
              </div>
              <p>
                We uphold scientifically-backed <br /> procedures with safe and
                hygienic <br /> practices, ensuring you're in good <br /> hands.
              </p>
            </div>
            <div className="bestConsult">
              <div className="imgDiv">
                <img src={choose3} alt="" id="choose" />
              </div>
              <p>
                Enjoy a free consultation with no <br /> additional fees at our
                Grove Park <br /> and Brentwood clinics.
              </p>
            </div>
          </div>
        </div>
      </>
    );
};

export default WhyChoose;