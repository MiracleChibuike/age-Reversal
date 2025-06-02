import React, { useEffect, useRef } from "react";
import whyChoose from "../assets/heroImages/whyChoose.svg";
import choose2 from "../assets/whyChoose/choose2.svg";
import choose3 from "../assets/whyChoose/choose3.svg"
import "./Landing.css"

const WhyChoose = () => {

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         console.log("Intersecting", entry.isIntersecting)
  //         entry.target.classList.add("show_Animate");
  //       } else {
  //         entry.target.classList.remove("show_Animate");
  //       }
  //     });
  //   });

  //   const allcards = document.querySelectorAll(".chooseUs");

  //   allcards.forEach((el) => observer.observe(el));

  //   return () => {
  //     allcards.forEach((el) => observer.unobserve(el));
  //   };
  // }, []);
  // allcards.current.forEach((el) => observer.observe(el))
    return (
      <>
        <div className="whyChoose">
          <div className="bestInfo">
            <div className="bestClinic chooseUs">
              <div className="imgDiv">
                <img src={whyChoose} alt="" id="choose" />
              </div>
              <p>
                Our London clinic is directly opposite <br /> Grove Park
                station, just a 15-minute <br /> train ride from London Bridge.
              </p>
            </div>
            <div className="bestScientific chooseUs">
              <div className="imgDiv">
                <img src={choose2} alt="" id="choose" />
              </div>
              <p>
                We uphold scientifically-backed <br /> procedures with safe and
                hygienic <br /> practices, ensuring you're in good <br /> hands.
              </p>
            </div>
            <div className="bestConsult chooseUs">
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