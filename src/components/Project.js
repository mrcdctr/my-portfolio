import React from 'react';

function Projects() {
  const projects = [
    // ... your project data
  ];

  return (
    <section id="projects">
        <h2>Web Development Projects</h2>
        <div class="projects">
            <div class="project-card">
                <h3>Content Management System (CMS) 🏗</h3>
                <p>Coming soon..</p>
                <button class="modal-btn" data-modal="modal1">View More</button>
            </div>
            <div class="project-card">
                <h3>E-commerce Website 🛒</h3>
                <p>Coming soon..</p>
                <button class="modal-btn" data-modal="modal2">View More</button>
            </div>
            <div class="project-card">
                <h3>Chat Application 💬</h3>
                <p>Coming soon..</p>
                <button class="modal-btn" data-modal="modal3">View More</button>
            </div>
        </div>
    </section>

    <!-- Python Projects Section -->
    <section id="python-projects">
        <h2>Python Projects</h2>
        <p>Here are some of the Python projects I've worked on:</p>
        <div class="projects">
            <div class="project-card">
                <h3>Python Cheat Sheet</h3>
                <p>A curated collection of Python syntax, tips, and examples for quick reference.</p>
                <a href="https://github.com/mrcdctr/python-cheat-sheet" target="_blank">View on GitHub</a>
            </div>
            <div class="project-card">
                <h3>Python Developer Course</h3>
                <p>Resources and projects created while taking a Python developer course.</p>
                <a href="https://github.com/mrcdctr/python-developer-course" target="_blank">View on GitHub</a>
            </div>
            <div class="project-card">
                <h3>Meme Generator</h3>
                <p>A Python application for generating memes with custom captions.</p>
                <a href="https://github.com/mrcdctr/meme-generator" target="_blank">View on GitHub</a>
            </div>
            <div class="project-card">
                <h3>Web Scraping App</h3>
                <p>A tool for scraping and analyzing data from websites using Python.</p>
                <a href="https://github.com/mrcdctr/web-scraping-app" target="_blank">View on GitHub</a>
            </div>
            <div class="project-card">
                <h3>Password Vault</h3>
                <p>A secure password management application built with Python.</p>
                <a href="https://github.com/mrcdctr/password-vault" target="_blank">View on GitHub</a>
            </div>
        </div>
    </section>
  );
}

export default Projects;