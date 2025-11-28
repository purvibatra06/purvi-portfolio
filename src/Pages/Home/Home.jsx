import "./Home.css";
import Header from "../../Common/Header/Header";
import bgImage from "../../assets/bgImage.jpg"; 
import About from "../About/About"

export default function Home() {
  return (
    
    <div className="home-container">
      <Header/>


      <section
        className="home-body"
        id="home"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "100vh"
        }}
      >
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
      <About/>

    </div>
  );
}
