import "./Cv.css";
import myCV from "../../assets/purvi_cv.pdf";

export default function ShowCV() {
  return (
    <section className="cv-view-container">
      <div className="cv-view-card">
        <h2 className="cv-view-title">My Resume</h2>

       <iframe
          src={myCV}
          title="My CV"
          className="cv-iframe"
        ></iframe>

        <a href="/cv/purvi_cv.pdf" download className="cv-download-btn">
          Download CV
        </a>
      </div>
    </section>
  );
}
