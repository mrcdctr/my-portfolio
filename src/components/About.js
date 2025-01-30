import React from 'react';

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-md-4 text-center">
            <img 
              src="https://via.placeholder.com/200" 
              alt="Profile" 
              className="img-fluid rounded-circle shadow-lg"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="col-md-8">
            <div className="card p-4 border-0 shadow-lg about-card">
              <h2 className="text-primary mb-3">About Me</h2>
              <p className="lead">
                IT Specialist with expertise in **system administration, network analysis, and technical support**. 
                Currently expanding my skillset in **web development**, focusing on **front-end (React, JavaScript, HTML, CSS)** 
                and **back-end (Python, Django, RESTful APIs)**.
              </p>
              <p>
                Seeking opportunities to **leverage my IT experience** and contribute to **innovative web projects**.
              </p>
              <a href="#contact" className="btn btn-primary mt-3">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
