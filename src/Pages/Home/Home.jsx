import { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import profilePic from "../../assets/Profile.jpeg";
import cvFile from "../../assets/Purvi_resume.pdf";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaPaintBrush, FaBolt, FaUsers} from "react-icons/fa";

import { Link } from "react-router-dom";
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const highlights = [
  {
    text: "Strong foundation in MERN Stack development",
    icon: <FaCode />,
  },
  {
    text: "Focus on clean UI & responsive design",
    icon: <FaPaintBrush />,
  },
  {
    text: "Quick learner & problem solver",
    icon: <FaBolt />,
  },
  {
    text: "User-first approach in every project",
    icon: <FaUsers />,
  },
];
  return (
    <>
      <div className="home-page-container">
        <Header />

        <section className="hero-section" id="home">
          <div className={`hero-content ${isVisible ? "visible" : ""}`}>
            <div className="hero-text">
              <h1 className="main-title">
                <span className="gradient-text">MERN Stack Developer</span>
              </h1>

              <h2 className="sub-title">
                Hello, I'm <span className="highlight">Purvi Batra</span>
              </h2>

              <p className="hero-description">
                I’m a passionate Web Developer who enjoys building modern and
                responsive applications. I work with React, Node.js, and the
                MERN stack to create clean UI and seamless user experiences.
              </p>

              <div className="home-buttons">
                <Link to="/About" className="know-more-btn">
                  Know More
                </Link>
                <a
                  href={cvFile}
                  download="Purvi_CV.pdf"
                  className="download-btn"
                >
                  Download Resume
                </a>
              </div>
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/purvi-batra-54b37b295"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/purvibatra06"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a href="mailto:purvibatra484@gmail.com">
                  <FaEnvelope />
                </a>
              </div>
            </div>

            <div className="hero-image-container">
              <div className="profile-wrapper">
                <div className="profile-image">
                  <img src={profilePic} alt="Purvi Batra" />
                </div>    
              </div>
            </div>
          </div>
        </section>

        <section className="highlights-section">
          <div className="section-container">
            <h2 className="section-title">
              <span className="gradient-text">What Sets Me Apart</span>
            </h2>
            <div className="highlights-grid">
              {highlights.map((item, index) => (
                <div className="highlight-card" key={index}>
                 <span className="highlight-icon">{item.icon}</span>

                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>
            Let's Build Something
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p>Have a project in mind? Let's turn ideas into reality.</p>

          <Link to="/Contact" className="btn-cta">
            Get In Touch
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
}