import React from 'react'
import Nav from '../components/Nav'
import Showcase from '../components/Showcase'
import Projects from '../components/Projects'
import About from '../components/About'
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/projects" component={ Projects} />
          <Route path="/about" component={About} />
          <Route path="/" exact component={ Showcase} />
        </Switch>
        <Nav />
      </div>
    </Router>
  );
}

export default App;
