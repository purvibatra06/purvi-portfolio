import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import PurviCV from "../../assets/Purvi_cv.pdf";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">

      <h2 className="logo">Purvi Batra</h2>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/About" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/Projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/Skills" onClick={() => setIsOpen(false)}>Skills</Link>
        <Link to="/Experience" onClick={() => setIsOpen(false)}>Experience</Link>
        <Link to="/Contact" onClick={() => setIsOpen(false)}>Contact Me</Link>
        <a href={PurviCV} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
          CV
        </a>
      </nav>
    </header>
  );
}
