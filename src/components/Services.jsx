
import { useState, useEffect, react } from "react";
import Body_Shapping from "../assets/Body-shaping-webp.webp";
import Body_shapping_icon from "../assets/Body-shaping-icon-webp.webp";
import Injectables_icon from "../assets/Injectables-icon-webp.webp";
import Injectables from "../assets/Injectables-webp.webp";
import Aesthetoics from "../assets/Aesthetics-webp.webp";
import Aesthetics_Icon from "../assets/Aesthetics-icon-webp.webp";
import leftLine from "../assets/servicesImg/leftLine.svg";
import Line from '../assets/servicesImg/line.svg';
import More from "../assets/servicesImg/more.svg";
import Hair_Services from "../assets/Hair-services-webp.webp";
import Hair_Icon from "../assets/Hair-services-icon-webp.webp";
import Facials from "../assets/Facials-webp.webp";
import Facials_Icon from "../assets/Facials-icon-webp.webp";
// Director Import begins here
import director from "../assets/director/director.svg";
import coverDesign from "../assets/director/design.svg";
import lined from "../assets/director/lined.svg"
import "./Landing.css";
// import AOS from "aos"
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Services = () => {
  useEffect(() => {
    // Initialize AOS
    Aos.init({
      duration: 2000
    });
  }, [])
    return (
      <>
        {/* services container */}
        <div className="services-container">
          <div className="lineHeader" style={{ display: "flex" }}>
            <img src={leftLine} alt="" />
            <h2>Our Services</h2>
            <img src={Line} style={{ width: "50%" }} alt="" />
          </div>
          {/* Services Containers - Outflow */}
          <div className="mainServices_Render" data-aos="zoom-in-up">
            <div className="services_render">
              <div className="imgPlaceholder" style={{ display: "flex" }}>
                <img src={Body_Shapping} id="image_placeholder_large" alt="" />
                <img
                  src={Body_shapping_icon}
                  id="image_placeholder_small"
                  alt=""
                />
              </div>
              <div className="servicesInfo" style={{ margin: "15px 0" }}>
                <p style={{ color: "rgba(235, 126, 0, 1)", margin: "5px 0" }}>
                  <strong>Body shaping</strong>
                </p>
                <p>
                  We offer non-surgical fat reduction <br /> methods focusing on
                  proven medications <br /> and technologies.
                </p>
              </div>
              <div
                className="more_link"
                style={{ display: "flex", justifyContent: "space-between" }}>
                <img src={More} alt="" />
                <button
                  style={{
                    background: "rgba(12, 7, 150, 1)",
                    padding: "10px 20px",
                    border: "none",
                    color: "#fff",
                    borderRadius: "4px",
                    position: "relative",
                    left: "-45px",
                  }}>
                  See more
                </button>
              </div>
            </div>
            {/* Render 2 */}
            <div className="services_render">
              <div className="imgPlaceholder" style={{ display: "flex" }}>
                <img src={Injectables} id="image_placeholder_large" alt="" />
                <img
                  src={Injectables_icon}
                  id="image_placeholder_small"
                  alt=""
                />
              </div>
              <div className="servicesInfo" style={{ margin: "15px 0" }}>
                <p style={{ color: "rgba(235, 126, 0, 1)", margin: "5px 0" }}>
                  <strong>Injectables</strong>
                </p>
                <p>
                  Our expert practitioners use high-quality <br /> injectables
                  to rebalance and redefine <br /> the face.
                </p>
              </div>
              <div
                className="more_link"
                style={{ display: "flex", justifyContent: "space-between" }}>
                <img src={More} alt="" />
                <button
                  style={{
                    background: "rgba(12, 7, 150, 1)",
                    padding: "10px 20px",
                    border: "none",
                    color: "#fff",
                    borderRadius: "4px",
                    position: "relative",
                    left: "-45px",
                  }}>
                  See more
                </button>
              </div>
            </div>
            {/* Render 3 */}
            <div className="services_render">
              <div className="imgPlaceholder" style={{ display: "flex" }}>
                <img src={Aesthetoics} id="image_placeholder_large" alt="" />
                <img
                  src={Aesthetics_Icon}
                  id="image_placeholder_small"
                  alt=""
                />
              </div>
              <div className="servicesInfo" style={{ margin: "15px 0" }}>
                <p style={{ color: "rgba(235, 126, 0, 1)", margin: "5px 0" }}>
                  <strong>Aesthetoics</strong>
                </p>
                <p>
                  We provide advanced aesthetic treatments <br /> such as
                  Platelet Rich Plasma (PRP) therapy, <br /> Non-Ablative
                  Fractional Laser.
                </p>
              </div>
              <div className="more_link" style={{}}>
                <img src={More} alt="" />
                <button
                  style={{
                    background: "rgba(12, 7, 150, 1)",
                    padding: "10px 20px",
                    border: "none",
                    color: "#fff",
                    borderRadius: "4px",
                    position: "relative",
                    left: "-45px",
                  }}>
                  See more
                </button>
              </div>
            </div>
            {/* Render 4 */}
            <div className="services_render">
              <div className="imgPlaceholder" style={{ display: "flex" }}>
                <img src={Hair_Services} id="image_placeholder_large" alt="" />
                <img src={Hair_Icon} id="image_placeholder_small" alt="" />
              </div>
              <div className="servicesInfo" style={{ margin: "15px 0" }}>
                <p style={{ color: "rgba(235, 126, 0, 1)", margin: "5px 0" }}>
                  <strong>Hair Services</strong>
                </p>
                <p>
                  Our clinic also offers a range of hair <br /> services to
                  complement your beauty <br /> and wellness journey.
                </p>
              </div>
              <div
                className="more_link"
                style={{ display: "flex", justifyContent: "space-between" }}>
                <img src={More} alt="" />
                <button
                  style={{
                    background: "rgba(12, 7, 150, 1)",
                    padding: "10px 20px",
                    border: "none",
                    color: "#fff",
                    borderRadius: "4px",
                    position: "relative",
                    left: "-45px",
                  }}>
                  See more
                </button>
              </div>
            </div>

            {/* Render 5 */}
            <div className="services_render">
              <div className="imgPlaceholder" style={{ display: "flex" }}>
                <img src={Facials} id="image_placeholder_large" alt="" />
                <img src={Facials_Icon} id="image_placeholder_small" alt="" />
              </div>
              <div className="servicesInfo" style={{ margin: "15px 0" }}>
                <p style={{ color: "rgba(235, 126, 0, 1)", margin: "5px 0" }}>
                  <strong>Facials</strong>
                </p>
                <p>
                  Experience our bespoke facials designed <br /> to address
                  various skin concerns, leaving <br /> your skin refreshed and
                  radiant.
                </p>
              </div>
              <div
                className="more_link"
                style={{ display: "flex", justifyContent: "space-between" }}>
                <img src={More} alt="" />
                <button
                  style={{
                    background: "rgba(12, 7, 150, 1)",
                    padding: "10px 20px",
                    border: "none",
                    color: "#fff",
                    borderRadius: "4px",
                    position: "relative",
                    left: "-45px",
                  }}>
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Director's View */}
        <div className="director">
          <div className="lineHeader" style={{ display: "flex" }}>
            <img src={leftLine} alt="" />
            <h2>Meet the director</h2>
            <img src={Line} style={{ width: "50%" }} alt="" />
          </div>
          <div className="directors-profile">
            <div className="director-About" >
              <div className="btn">
                <button
                  style={{
                    color: "#fff",
                    background: "rgba(14, 67, 242, 1)",
                    fontWeight: "700",
                    padding: "8px 15px",
                    fontSize: "1.5rem",
                    border: "none",
                    margin: "20px 0",
                    boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.25)",
                    cursor: "pointer",
                  }}>
                  Faith Cris-Nzurike
                </button>
              </div>
              <div className="aboutTxt" style={{ margin: "8px 0" }}>
                <p style={{ fontSize: "1.2rem" }}>
                  Clinical Director of Age Reversal Clinic, Faith is a
                  sought-after <br /> Skin Specialist, Aesthetic Nurse
                  Practitioner, Advanced <br /> Prescriber, and Phlebotomist.
                  With BSc degrees in Psychology <br /> and Nursing, and
                  extensive training from prestigious institutions, she <br />{" "}
                  brings over ten years of experience to the clinic.
                </p>
              </div>
            </div>
            <div
              className="directorImg"
              style={{ margin: "2px 0" }}>
              <img
                src={coverDesign}
                alt=""
                id="designCoverMain"
                // style={{ position: "relative", left: "30px", top: "-210px" }}
              />
              <img src={director} alt="" id="directorCover" />
              <img src={coverDesign} alt="" id="designCover" />
            </div>
          </div>
          <img src={lined} style={{ width: "100%" }} alt="" />
        </div>
      </>
    );
};

export default Services;