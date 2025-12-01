import "./Home.css";
import Header from "../../Common/Header/Header";
import About from "../About/About";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";

export default function Home() {
  return (
    <div className="home-container">
      <Header />

      <section className="home-body" id="home">
        <div className="intro-text">
          <h1>
            Hello, I'm <span className="highlight">Purvi Batra</span>
          </h1>

          <p>
            I am a passionate Web Developer working with <strong>React</strong> 
            and <strong>Node.js</strong>. I love building clean, fast and modern web applications.
          </p>

          <a href="#about" className="know-more-btn">
            Know More
          </a>
        </div>
      </section>

      <About />
      <Projects/>
      <Skills/>
    </div>
  );
}
