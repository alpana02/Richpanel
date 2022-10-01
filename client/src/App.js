import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/mentor/About";
import { Login } from "./components/Login";
import { Signup } from "./components/mentor/Signup";
import { HomePage } from "./components/HomePage";


function App() {
  return (
    <>
        <Router>
          <Navbar  />
          <div>
            <Routes>
              <Route exact path="/" element={<About/>} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/homepage" element={<HomePage />} />
            </Routes>
          </div>
        </Router>
    </>
  );
}

export default App;
