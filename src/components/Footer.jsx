import React, {useState, useEffect} from "react";
import "./Footer.css"
const Footer = () => {
    return (
      <>
        <div className="footerContainer">
          <div className="footerLinks">
            <div className="imports">
              <div className="link_ad">
                <p>
                  Grove Park Clinic <br /> 374 Baring Road, Grove Park, London,
                  SE12 0EF
                </p>
              </div>
              <hr />
              <div className="link_ad2">
                <p>
                  Brentwood Clinic <br /> Clyde Lodge Farm, Essex, CM13 3SL
                </p>
              </div>
            </div>
            <div className="link_ad3">
              <p>
                Phone:{" "}
                <a
                  href="tel:+4407984159517"
                  style={{ textDecoration: "none", color: "#fff" }}>
                  0798 415 9517
                </a>{" "}
                |{" "}
                <a
                  href="tel:+440208 857 2000"
                  style={{ textDecoration: "none", color: "#fff" }}>
                  0208 857 2000
                </a>{" "}
                <br />{" "}
                <a
                  href="mailto:info@agereversalmedspa.com"
                  style={{ textDecoration: "none", color: "#fff" }}>
                  info@agereversalmedspa.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
};

export default Footer