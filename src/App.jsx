// src/App.jsx

import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* We add this dummy content below.
        Later, we will replace this with our 'About' and 'Projects' sections.
      */}
      <main className="content">
        <section id="dummy-home">
          <h1>Welcome to My Portfolio</h1>
          <p>This is a placeholder section. Scroll down to see the navbar effect.</p>
        </section>
      </main>

    </div>
  );
}

export default App;