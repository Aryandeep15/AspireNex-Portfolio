import React from 'react';
import Navbar from './components/Navbar';
import Description from './components/Description';
import Education from './components/Education';
import Skills from './components/Skills';
import WorkExperience from './components/WorkEx';
import Projects from './components/Project';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <Navbar />
    <section id="home">
      <Description />
    </section>
    <section id="about">
      <Education />
      <Skills />
      <WorkExperience />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <Footer />
  </div>
);

export default App;
