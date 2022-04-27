import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import NavbarC from './components/Navbar';

function App() {
  return (
    <div>

    <NavbarC/>

    <Router>
      <Routes>
      
      <Route exact path="/" element={<Home/>}/>

      </Routes>
    </Router>
    </div>

  );
}

export default App;
