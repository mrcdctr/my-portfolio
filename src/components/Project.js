import React from 'react';

function Projects() {
  const projects = [
    // ... your project data
  ];

  return (
    <section id="projects" className="py-5 bg-light"> {/* Added padding and background color */}
      <div className="container">
        <h2>Projects</h2>
        <div className="row"> {/* Use a row for grid layout */}
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}> {/* Each project takes up 4 columns on medium screens */}
              <div className="card"> {/* Use a card for each project */}
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;