import React from 'react';
import Nav from '../components/Nav';
import NotFound from '../components/NotFound';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {window.location.pathname !== '/' ? <Navigate to="/" /> : null}
        {/* <Nav /> */}
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route component={NotFound} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
