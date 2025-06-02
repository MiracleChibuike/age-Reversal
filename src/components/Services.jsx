
import { useState, useEffect, react } from "react";
import Body_Shapping from "../assets/Body-shaping-webp.webp";
import Body_shapping_icon from "../assets/Body-shaping-icon-webp.webp";
import Injectables_icon from "../assets/Injectables-icon-webp.webp";
import Injectables from "../assets/Injectables-webp.webp";
import Aesthetoics from "../assets/Aesthetics-webp.webp";
import Aesthetics_Icon from "../assets/Aesthetics-icon-webp.webp";
import leftLine from "../assets/servicesImg/leftLine.svg";
import Line from '../assets/servicesImg/line.svg';
import More from "../assets/servicesImg/more.svg"
import "./Landing.css"

const Services = () => {
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
          <div className="mainServices_Render">
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
                  to rebalance and redefine the <br /> face.
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
                  Platelet Rich Plasma (PRP) <br /> therapy, Non-Ablative
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
          </div>
        </div>
      </>
    );
};

export default Services;