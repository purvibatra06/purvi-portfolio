
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">

      <header className="header">
        <h2 className="logo">Purvi Batra</h2>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact Me</a>
          <a href="#cv">CV</a>
        </nav>
      </header>

      <section className="home-body" id="home">
        <div className="image-box">
          <img
            src="https://via.placeholder.com/300"
            alt="Dummy"
            className="profile-img"
          />
        </div>

        <div className="intro-text">
          <h1>Hello, I'm Purvi Batra</h1>
          <p>
            I am a passionate Web Developer working with <strong>React</strong> and 
            <strong> Node.js</strong>. I love building clean, fast and modern web applications.
          </p>

          <a href="#about" className="know-more-btn">
            Know More
          </a>
        </div>
      </section>

    </div>
  );
}
