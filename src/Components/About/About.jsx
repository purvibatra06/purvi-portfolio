import "./About.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">

        <h2>About Me</h2>

        <p>
          Hi, I’m <strong>Purvi Batra</strong> — a passionate Developer skilled in 
          React.js, JavaScript, HTML, CSS, and Node.js.
        </p>

        <p>
          I enjoy building clean, user-friendly and visually appealing web interfaces. 
          My goal is to create smooth, responsive experiences for users. I also work 
          on backend development using Node.js and Express.
        </p>

        <p>
          I am currently pursuing <strong>BCA</strong> and working on several real-world 
          projects to improve my development skills.
        </p>

        <div className="social-icons">
          <a href="mailto:purvibatra484@gmail.com" className="icon email"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/purvi-batra-54b37b295" target="_blank" className="icon linkedin"><FaLinkedin /></a>
          <a href="https://github.com/yourgithub" target="_blank" className="icon github"><FaGithub /></a>
        </div>

      </div>
    </section>
  );
}
