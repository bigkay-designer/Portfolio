import React from 'react'
import Nav from '../components/Nav'
import Showcase from '../components/Showcase'
import Footer from '../components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
     {/* navbar */}
      <Nav />
     {/* showcase */}
      <Showcase />
     {/* side socialmedia bar */}
     {/* footer */}
     <Footer />
    </div>
  );
}

export default App;
