import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">

        <div className="about-card">
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
            I have completed my <strong>BCA (2022–2025)</strong> from
            <strong> Tilak Raj Chadha Institute of Management & Technology affiliated with Kurukshetra University(KUK), Yamunanagar</strong>.
            Currently, I am pursuing my <strong>Master’s in AI/ML</strong> from
            <strong> Lovely Professional University</strong>.
          </p>
          <p>
            My focus is to build clean, intuitive, and impactful websites that not only look good
            but also deliver a smooth user experience.
          </p>
        </div>
        <div className="about-subsection">
          <h3 className="highlight-heading">Education</h3>
          <div className="tree">
            <ul>
            </ul>
          </div>
          <div className="education-cards">
            <article className="edu-card"> 
               <div className="edu-body">
                <h4>MCA — Master of Computer Applications (ongoing)</h4>
                <p className="edu-school">Lovely Professional University — AI/ML specialization</p>
                <p className="edu-duration">2025 — Present</p>
              </div>
            </article>
            <article className="edu-card">           
              <div className="edu-body">
                <h4>BCA — Bachelor of Computer Applications</h4>
                <p className="edu-school">Tilak Raj Chadha Institute of Management & Technology affiliated with Kurukshetra University(KUK), Yamunanagar</p>
                <p className="edu-duration">2022 — 2025</p>
              </div>
            </article>

            <article className="edu-card">
              <div className="edu-body">
                <h4>MATRICULATION </h4>
                <p className="edu-school">Passed my Matriculation from Government Model Senior Secondary School. </p>
                <p className="edu-duration">2021-2022</p>
              </div>
            </article>
          </div>
        </div>

        <div className="about-subsection">
          <h3 className="highlight-heading">Hobbies</h3>
          <div className="tree">
            <ul>
              <li><span>Crafting & Creations</span></li>
              <li><span>Travelling & Exploring Cultures</span></li>
              <li><span>Reading Books & Self-Growth Literature</span></li>
              <li><span>Listening to Music</span></li>
            </ul>
          </div>
        </div>

        <div className="about-btn-container">
          <Link to="/projects" className="view-projects-btn">
            View My Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}