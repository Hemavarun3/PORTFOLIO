import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'; // Import Routes and Navigate from react-router-dom for React 18 compatibility
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Header from './components/Header/Navbar';
import Projects from './components/projects/projects';
import Footer from './components/Footer/footer';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path="/home" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
