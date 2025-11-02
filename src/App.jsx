// src/App.jsx

import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import About from './components/About'; 
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Contact />
      
    </div>
  );
}

export default App;