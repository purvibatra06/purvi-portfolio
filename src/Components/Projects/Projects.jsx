import "./Project.css";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Flight Management System",
      description: "A DBMS project for managing flights, passengers, tickets, and transactions.",
      github: "https://github.com/yourusername/flight-management-system",
    },
    {
      title: "Temperature Convertor",
      description: "Built using HTML, CSS, and JavaScript. Converts between Celsius, Fahrenheit, and Kelvin instantly.",
      github: "https://github.com/yourusername/temperature-convertor",
    },
    {
      title: "Tindog Website",
      description: "A modern dating-style website built with HTML, CSS, and Bootstrap. Includes user profiles and swipe interactions.",
      github: "https://github.com/yourusername/tindog-website",
    },
    {
      title: "Job Portal",
      description: "Built using Node.js with authentication, role-based access, company management, and job posting features.",
      github: "https://github.com/yourusername/job-portal",
    },
    {
      title: "Online Course Management System",
      description: "Built using Node.js and React, supporting courses, instructors, students, enrollment, and assignments.",
      github: "https://github.com/yourusername/online-course-management-system",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website built using React and CSS. Showcases projects, skills, and contact info.",
      github: "https://github.com/yourusername/portfolio",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="gradient-title">Projects</h2>
      <div className="timeline">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
              >
                <FaGithub style={{ marginRight: "6px" }} />
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
