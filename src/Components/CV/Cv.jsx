import React from "react";
import "./Cv.css";
import myCV from "../../assets/Purvi_cv.pdf"; 

const CVViewer = () => {
  return (
     <section id="cv" className="CV-container">
      <h2 className="cv-title">My Resume</h2>

      <div className="cv-buttons">
  <a 
    href={myCV} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="view-btn"
  >
    View CV
  </a>

  <a 
    href={myCV} 
    download 
    className="download-btn"
  >
    Download CV
  </a>
</div>

    </section>
  );
};

export default CVViewer;
