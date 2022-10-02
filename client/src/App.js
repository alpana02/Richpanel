import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Plan from "./components/Plan";
import Payment from "./components/Payment";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
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
              <Route exact path="/plan" element={<Plan />} />
              <Route exact path="/payment" element={<Payment />} />
            </Routes>
          </div>
        </Router>
    </>
  );
}

export default App;
