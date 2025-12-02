import React from "react";
import "./Cv.css";
import myCV from "../../assets/Purvi_cv.pdf"; 

const CVViewer = () => {
  return (
     <section id="cv" className="CV-container">
      <h2 className="cv-title">My Resume</h2>

      <div className="cv-container">
        <iframe
          src={myCV}
          title="My CV"
          className="cv-iframe"
        ></iframe>
      </div>

      <div className="cv-buttons">
        <a href={myCV} download className="download-btn">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default CVViewer;
