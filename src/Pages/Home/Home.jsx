import "./Home.css";
import Header from "../../Common/Header/Header";
import profilePic from "../../Assets/Profile.jpeg"; 
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si"; 
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="home-container">
      <Header />

      <section className="home-body" id="home">
        <div className="intro-container">
        
          <div className="intro-text">
            <h1>
              Hello, I'm <span className="highlight">Purvi Batra</span>
            </h1>
            <p>
              I am a passionate Web Developer working with <strong>React</strong> and <strong>Node.js</strong>. I love building clean, fast, and modern web applications.
            </p>
            <Link to="/About" className="know-more-btn">
             Know More
             </Link>

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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
