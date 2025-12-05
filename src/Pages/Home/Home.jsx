import "./Home.css";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import profilePic from "../../assets/Profile.jpeg";
import cvFile from "../../assets/Purvi_cv.pdf";
import { FaReact, FaNodeJs,  FaJs, FaHtml5, FaCss3Alt, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiMongodb, SiExpress,SiTypescript, SiMysql } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <div className="home-container">
      <Header />

      <section className="home-body" id="home">
        <div className="intro-container">

   
          <div className="intro-text">
            <h1>
              Hello, I'm <span className="highlight">Purvi Batra</span>
            </h1>
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
            <div className="floating-icons">
              <FaReact className="icon react" />
              <FaNodeJs className="icon node" />
              <FaJs className="icon js" />
             
              <FaHtml5 className="icon html" />
              <FaCss3Alt className="icon css" />
              <SiMongodb className="icon mongodb" />
              <SiExpress className="icon express" />
              <SiTypescript className="icon typescript" />
              <SiMysql className="icon mysql" />
            </div>
          </div>

        </div>
      </section>
     
    </div>
     <Footer />
     </>
  );
}
