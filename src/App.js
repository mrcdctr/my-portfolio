import React from "react";
import Navbar from "./components/Navbar"; // Updated Header to Navbar
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Navbar at the Top */}
      <Navbar />

      {/* Main Content */}
      <main className="container">
        <Home />
        <Projects />
        <About />
        <Contact />
      </main>

      {/* Footer at the Bottom */}
      <Footer />
    </>
  );
}

export default App;
