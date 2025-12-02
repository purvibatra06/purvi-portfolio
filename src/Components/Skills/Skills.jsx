import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">

      <h2 className="gradient-title">Skills</h2>.
      <div className="skills-container">
        <div className="skill-group">
          <h3 className="skill-heading">Frontend</h3>
          <div className="skill-list"> 
            <span className="skill-pill">HTML</span>
            <span className="skill-pill">CSS</span>
             <span className="skill-pill">Bootstrap</span>
             <span className="skill-pill">React</span>
            <span className="skill-pill">JavaScript</span>
          </div>
        </div>

        <div className="skill-group">
          <h3 className="skill-heading">Backend</h3>
          <div className="skill-list">
            <span className="skill-pill">Node.js</span>
            <span className="skill-pill">Express.js</span>
            <span className="skill-pill">MongoDB</span>
          </div>
        </div>

        <div className="skill-group">
          <h3 className="skill-heading">Tools</h3>
          <div className="skill-list">
            <span className="skill-pill">Git</span>
            <span className="skill-pill">GitHub</span>
            <span className="skill-pill">VS Code</span>
            <span className="skill-pill">Canva</span>
            <spam className="skill-pill">hhhhh</spam>
          </div>
        </div>

      </div>
    </section>
  );
}
