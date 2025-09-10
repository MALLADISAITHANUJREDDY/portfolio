import React from "react";

function Projects() {
  const projectList = [
    { title: "Project 1", description: "A short description of project 1" },
    { title: "Project 2", description: "A short description of project 2" },
    { title: "Project 3", description: "A short description of project 3" },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
