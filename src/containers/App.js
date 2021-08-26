import React from 'react';
import Nav from '../components/Nav';
import NotFound from '../components/NotFound';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {window.location.pathname !== '/' ? <Redirect to="/" /> : null}
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
