import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-left">
        <img
          src="https://via.placeholder.com/300"
          alt="Profile"
          className="about-img"
        />
      </div>

      <div className="about-right">
        <h2>About Me</h2>
        <p>
          Hi, I’m <strong>Purvi Batra</strong> — a passionate Frontend Developer
          skilled in React.js, JavaScript, HTML, CSS, and Node.js.  
        </p>

        <p>
          I love building clean, user-friendly and visually appealing interfaces.
          My focus is always on creating responsive layouts and smooth user
          experiences. Along with frontend skills, I also work on backend APIs
          with Node.js and Express.
        </p>

        <p>
          I am currently pursuing <strong>BCA</strong> and working on several
          real-world projects to enhance my development skills.
        </p>

        <button className="about-btn">
          Download CV
        </button>
      </div>
    </section>
  );
}
