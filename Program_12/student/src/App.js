import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import Register from './components/Register';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav>
          <p><b>Student Management System</b></p>
          <Link to="/register">Register</Link>{" | "}
          <Link to="/login">Login</Link>{" | "}
          <Link to="/about">About Us</Link>{" | "}
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;