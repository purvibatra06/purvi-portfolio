import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      role: "Intern",
      company: "IBM SkillBuild",
      duration: "July 2024 - Aug 2024",
      description: "Completed a technical internship focusing on web development, front-end frameworks, and hands-on projects to strengthen coding skills."
    },
    {
      role: "Trainee",
      company: "Elite Web Tech",
      duration: "July 2024 - Present",
      description: "At Elite Web Tech, I am training in full-stack development with a focus on Node.js and React. I work on real-time projects, follow industry coding standards,front-end frameworks, and modern web technologies."
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-content">
        <h2>Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.role} - {exp.company}</h3>
            <span className="duration">{exp.duration}</span>
            <p>{exp.description}</p>
            
            
          </div>
        ))}
      </div>
    </section>
  );
}