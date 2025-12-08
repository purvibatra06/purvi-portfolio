import "./Header.css";
import { Link } from "react-router-dom";
import PurviCV from "../../assets/Purvi_cv.pdf";

export default function Header() {
  return (
    <header className="header">
      <h2 className="logo">Purvi Batra</h2>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Experience">Experience</Link>
        <Link to="/Contact">Contact Me</Link>
        <a href={PurviCV} target="_blank" rel="noopener noreferrer">
          CV
        </a>
       
      </nav>
    </header>
  );
}
