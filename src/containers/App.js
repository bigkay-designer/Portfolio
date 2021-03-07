import React from 'react'
import Nav from '../components/Nav'
import Showcase from '../components/Showcase'
import MyTech from '../components/MyTech'
import Projects from '../components/Projects'
import About from '../components/About'
import Footer from '../components/Footer'
import {Route, BrowserRouter as Router,Switch, Redirect} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      {window.location.pathname !== '' ? <Redirect to="/" />: null}
      <Nav />
      <div className="app">
        {/* <MyTech /> */}
        <Projects />
        <About />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
