import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

// Importing Page Components

import About from './components/About';

import Contact from './components/Contact';

import Login from './components/Login';

import Register from './components/Register';

function App() {
    return (
        <Router>
            <div>

                {/* Navigation Bar */}

                <nav>
                    <Link to="/register">Registration</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                {/* Route Definitions */}

                <Routes>
                    <Route path="/" element={<Register />} /> {/* Default route */}
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