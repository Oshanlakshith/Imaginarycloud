import React from 'react';
import './App.css';
import Header from './Header'; // Import the Header component
import Services from './Services';
import Portfolio from './Portfolio'; // Import the Header component
import Resources from './Resources';
import Company from './Company';
import Careers from './Careers';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <Router className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/company" element={<Company />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
    </Router>
  );
}

export default App;