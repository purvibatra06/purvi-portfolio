import "./Home.css"; 

export default function Home() {
  return (
    <div className="home-container">
      <div className="left-section">
        <h4>Hello, I'm</h4>
        <h1>
          Purvi <br /> Batra
        </h1>
        <p>Front-End Developer | UI/UX Designer</p>

        <div className="social-icons">
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </div>

      <div className="right-section">
        <img src="/profile.jpg" alt="Profile" />
      </div>

    </div>
  );
}
