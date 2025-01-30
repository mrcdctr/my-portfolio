import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";  // <-- Import Contact component
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Projects />
      <About />
      <Contact />   {/* <-- Add Contact component here */}
      <Footer />
    </div>
  );
}

export default App;
