import { Mail, Github, Linkedin, Phone } from "lucide-react";
import "./Contact.css";

export default function ContactMe() {
  return (
    <section className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Contact Me</h2>

        <p className="contact-subtitle">
          Feel free to reach out to me through any of the platforms below:
        </p>

        <div className="contact-details">

          <div className="contact-item">
            <Mail size={26} className="contact-icon" />
            <a href="mailto:purvibatra484@gmail.com">
              purvibatra484@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <Linkedin size={26} className="contact-icon" />
            <a
              href="https://www.linkedin.com/in/purvi-batra-54b37b295"
              target="_blank"
            >
              linkedin.com/in/purvi-batra
            </a>
          </div>

          <div className="contact-item">
            <Github size={26} className="contact-icon" />
            <a href="https://github.com/yourgithub" target="_blank">
              github.com/yourgithub
            </a>
          </div>

          <div className="contact-item">
            <Phone size={26} className="contact-icon" />
            <a href="tel:+91XXXXXXXXXX">+91 9066691000</a>
          </div>
        </div>
      </div>
    </section>
  );
}
