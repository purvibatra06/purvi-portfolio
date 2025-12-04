import "./Project.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="gradient-title">Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <h3 className="project-title">Flight Management System</h3>
          <p>
           This is a database management system (DBMS) project for managing flights, passengers, tickets, transactions, and related entities.
          </p>
        </div>
          <div className="project-card">
          <h3 className="project-title">Temperature Convertor</h3>
          <p>
            Built using html,css,JavaScript Convert between Celsius, Fahrenheit and Kelvin instantly.
          </p>
        </div>
          <div className="project-card">
          <h3 className="project-title">Tindog Website</h3>
          <p>
            Tindod is a simple and modern dating-style website built using HTML, CSS, and Bootstrap. It includes user profiles, swipe-style interactions, and responsive layout support
          </p>
        </div>

        <div className="project-card">
          <h3 className="project-title">Job Portal</h3>
          <p>
            Built using Node.js with authentication, role-based access,
            company management, and job posting features.
          </p>
        </div>

        <div className="project-card">
          <h3 className="project-title">Online Course Management System</h3>
          <p>
            Built using Node.js and React, supporting courses, instructors,
            students, enrollment, and assignments.
          </p>
        </div>
        


      </div>
    </section>
  );
}
