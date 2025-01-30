import React from "react";

function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
        <div className="social-links mt-2">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:your.email@example.com" className="text-white">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;