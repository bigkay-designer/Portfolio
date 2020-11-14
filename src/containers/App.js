import React from 'react'
import Nav from '../components/Nav'
import Showcase from '../components/Showcase'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import {Route, BrowserRouter as Router,Switch, withRouter} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/projects" component={ Projects} />
          <Route path="/" exact component={ Showcase} />
        </Switch>
        {/* side socialmedia bar */}
        <Nav />
      </div>
    </Router>
  );
}

export default App;
