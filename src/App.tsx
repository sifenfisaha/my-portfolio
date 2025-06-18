import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Aboutme } from "./components/Aboutme";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Aboutme />
        <Projects />
        <Footer />
      </main>
    </>
  );
};

export default App;
