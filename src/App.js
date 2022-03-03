import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";

function App() {
  return (
    <main className="main">
      <NavBar />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
