import React, { useRef, useEffect } from "react";
import consult from "../assets/consult/consultation.svg";
import consult2 from "../assets/consult/consult2.svg";
import consult3 from "../assets/consult/consult3.svg";
import "./Consult.css"

const Consultation = () => {
   return (
     <>
       {/* Consultation Box */}
       <div
         className="consult"
         style={{ margin: "30px 0 0 0", padding: "0 30px" }}>
         <div className="btnOverhaul">
           <button
             style={{
               background: "rgba(235, 126, 0, 1)",
               borderRadius: "10px",
               width: "100px",
               height: "20px",
               borderRadius: "10px",
               border: "none",
               position: "relative",
               left: "20px",
             }}></button>{" "}
           <button
             style={{
               background: "rgba(12, 7, 150, 1)",
               borderRadius: "10px",
               width: "130px",
               height: "20px",
               borderRadius: "10px",
               border: "none",
             }}></button>
           {/*  */}
         </div>
         <div
           className="consultContainer"
           style={{
             display: "flex",
             //  justifyContent: "space-evenly",
             flexWrap: "wrap",
           }}>
           <div className="consultImg" style={{ display: "flex" }}>
             <img src={consult} alt="" />
             <div style={{ margin: "0 10px" }}>
               <p>
                 {" "}
                 <img src={consult2} alt="" />
               </p>
               <p>
                 {" "}
                 <img src={consult3} alt="" />
               </p>
             </div>
           </div>
           <div className="consultTxt">
             <h2 className="consultHeader" style={{ margin: "25px 0" }}>
               Request a Free Consultation
             </h2>
             <p style={{ fontSize: "1.2rem", margin: "25px 0" }}>
               Fill in the form below, and we'll be <br /> in touch to arrange
               your free, no-obligation consultation. Opt-in <br /> to our
               newsletter for special offers delivered directly to your inbox.
             </p>
             <div className="buttonBook">
               <button
                 id="book_btn"
                 style={{
                   background: "rgba(12, 7, 150, 1)",
                   padding: "10px 25px",
                   border: "none",
                   color: "#fff",
                   fontSize: "1.2rem",
                   cursor: "pointer",
                 }}>
                 Book Now
               </button>
             </div>
           </div>
         </div>
         <div className="layerSubmit" style={{ margin: "15px 10px" }}>
           <p style={{ fontSize: "1.2rem" }}>
             By submitting, you agree to receive our newsletters, promotions,
             and special offers. You can opt out at any time later.
           </p>
         </div>
       </div>
     </>
   );
};

export default Consultation;