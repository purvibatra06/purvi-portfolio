import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">

        <h2>About Me</h2>

        <p>
          Hi, I’m <strong>Purvi Batra</strong>, a dedicated and enthusiastic Web Developer
          who loves turning ideas into beautiful and functional digital experiences.
        </p>

        <p>
          I specialize in creating modern, responsive, and user-friendly web interfaces
          using React.js, JavaScript, HTML, CSS, and Bootstrap.
          I also work with backend technologies like Node.js and Express to build complete web solutions.
        </p>

        <p>
          I have completed my <strong>BCA</strong> and continuously improve my skills by
         working on real-world projects, exploring new tools, and keeping up with the latest trends in web development.

        </p>

        <p>
          My focus is to build clean, intuitive, and impactful websites that not only look good
          but also deliver a smooth user experience. I’m always excited to take on new challenges
          and bring creative ideas to life.
        </p>

        <div className="about-btn-container">
          <Link to="/projects" className="view-projects-btn">
            View My Projects →
          </Link>
        </div>

      </div>
    </section>
  );
}
