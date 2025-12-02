import  { useState } from "react";
import "./Contact.css";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export default function ContactMe() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "Sending..." });

    setTimeout(() => {
      setStatus({
        loading: false,
        success: true,
        message: "Message sent successfully!",
      });
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  }

  return (
    <section className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Contact Me</h2>

        <div className="contact-socials">
          <a href="mailto:purvibatra484@gmail.com">
            <Mail size={28} />
          </a>
          <a href="https://github.com/yourgithub" target="_blank">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/purvi-batra-54b37b295" target="_blank">
            <Linkedin size={28} />
          </a>
          <a href="tel:+9100000000">
            <Phone size={28} />
          </a>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {status.message && (
            <p className={`status-message ${status.success ? "success" : ""}`}>
              {status.message}
            </p>
          )}

          <button type="submit" className="submit-btn" disabled={status.loading}>
            {status.loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
