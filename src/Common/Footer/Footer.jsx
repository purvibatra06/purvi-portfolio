import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Purvi Batra. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:your.email@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
