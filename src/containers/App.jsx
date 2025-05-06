import React from 'react';
import Nav from '../components/nav-component/Nav.jsx';
import NotFound from '../components/NotFound.jsx';
import Footer from '../pages/Footer.jsx';
import Home from '../pages/Home.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import './App.css';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import Experience from '../pages/Experience.jsx';
import Projects from '../pages/Projects.jsx';
import ScrollToTop from '../components/common/ScrollToTop.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact element={NotFound} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
