import "./Skills.css";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiTypescript, SiMysql } from "react-icons/si";
import {SiExpress , SiMongodb, SiNodedotjs } from "react-icons/si";
import {SiGit, SiGithub,  SiVscodium, SiCanva ,SiPostman } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="gradient-title">Skills</h2>

      <div className="skills-container">

        <div className="skill-group">
          <h3 className="skill-heading">Frontend</h3>
          <div className="skill-list">
            <span className="skill-pill"><SiHtml5 /> HTML</span>
            <span className="skill-pill"><SiCss3 /> CSS</span>
            <span className="skill-pill"><SiBootstrap/>Bootstrap</span>
            <span className="skill-pill"><SiReact /> React</span>
            <span className="skill-pill"><SiJavascript /> JavaScript</span>
            <span className="skill-pill"><SiTypescript /> Typescript</span>
            <span className="skill-pill"><SiMysql /> Mysql</span>
          </div>
        </div>

        <div className="skill-group">
          <h3 className="skill-heading">Backend</h3>
          <div className="skill-list">
            <span className="skill-pill"><SiNodedotjs/>Node.js</span>
            <span className="skill-pill"><SiExpress/>Express.js</span>
            <span className="skill-pill"><SiMongodb/>MongoDB</span>
          </div>
        </div>

        <div className="skill-group">
          <h3 className="skill-heading">Tools</h3>
          <div className="skill-list">
            <span className="skill-pill"><SiGit/>Git</span>
            <span className="skill-pill"><SiGithub/>GitHub</span>
            <span className="skill-pill">< SiVscodium/>VS Code</span>
            <span className="skill-pill"><SiCanva/>Canva</span>
             <span className="skill-pill"><SiPostman/>Postman</span>
          </div>
        </div>

      </div>
    </section>
  );
}
