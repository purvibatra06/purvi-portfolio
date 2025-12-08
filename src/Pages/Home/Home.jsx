import "./Home.css";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import profilePic from "../../assets/Profile.jpeg";
import cvFile from "../../assets/Purvi_cv.pdf";
import {  FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home-page-container">
        <Header />

        <section className="home-body" id="home">
          <div className="intro-container">


            <div className="intro-text">
              <h1 className="main-heading">MERN Stack Developer</h1>

                <h2 className="sub-heading">
                 Hello, I'm <span className="highlight">Purvi Batra</span>
                 </h2>
              <p>
                I’m a passionate Web Developer who enjoys building modern, and responsive applications. I work with React, Node.js, and the MERN stack to create clean UI and seamless user experiences. I love transforming ideas into functional and visually engaging digital products.
              </p>


              <div className="home-buttons">
                <Link to="/About" className="know-more-btn">Know More</Link>

                <a
                  href={cvFile}
                  download="Purvi_CV.pdf"
                  className="download-btn"
                >
                  Download CV
                </a>
              </div>

              <div className="social-icons">
                <a href="https://www.linkedin.com/in/purvi-batra-54b37b295" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>

                <a href="https://github.com/purvibatra06" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>

                <a href="mailto:purvibatra484@gmail.com">
                  <FaEnvelope />
                </a>
              </div>
            </div>

            <div className="intro-image">
              <img src={profilePic} alt="Purvi Batra" />
          
            </div>

          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
