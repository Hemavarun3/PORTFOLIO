import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Header from './components/Header/Navbar';
import Projects from './components/projects/projects';
import Footer from './components/Footer/footer';


function App() {
  return (
    <Router basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
