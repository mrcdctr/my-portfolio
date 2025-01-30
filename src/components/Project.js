import React from 'react';

function Projects() {
  const webProjects = [
    { title: "Content Management System (CMS) 🏗", description: "Coming soon.." },
    { title: "E-commerce Website 🛒", description: "Coming soon.." },
    { title: "Chat Application 💬", description: "Coming soon.." }
  ];

  const pythonProjects = [
    { title: "Python Cheat Sheet", description: "A curated collection of Python syntax, tips, and examples for quick reference.", link: "https://github.com/mrcdctr/python-cheat-sheet" },
    { title: "Python Developer Course", description: "Resources and projects created while taking a Python developer course.", link: "https://github.com/mrcdctr/python-developer-course" },
    { title: "Meme Generator", description: "A Python application for generating memes with custom captions.", link: "https://github.com/mrcdctr/meme-generator" },
    { title: "Web Scraping App", description: "A tool for scraping and analyzing data from websites using Python.", link: "https://github.com/mrcdctr/web-scraping-app" },
    { title: "Password Vault", description: "A secure password management application built with Python.", link: "https://github.com/mrcdctr/password-vault" }
  ];

  return (
    <div className="container mt-5">
      {/* Web Development Projects Section */}
      <section id="projects">
        <h2 className="text-center mb-4">💻 Web Development Projects</h2>
        <div className="row">
          {webProjects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card project-card p-3 shadow-sm">
                <h3 className="project-title">{project.title}</h3>
                <p>{project.description}</p>
                <button className="btn btn-primary">View More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Python Projects Section */}
      <section id="python-projects" className="mt-5">
        <h2 className="text-center mb-4">🐍 Python Projects</h2>
        <p className="text-center">Here are some of the Python projects I've worked on:</p>
        <div className="row">
          {pythonProjects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card project-card p-3 shadow-sm">
                <h3 className="project-title">{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="btn btn-dark" target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
