import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Header from './components/Header/Navbar';
import Footer from './components/Footer/footer';
import About from './components/About/about';
import Intro from './components/Intro/intro';
import Portfolio from './components/portfolio/portfolio';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
