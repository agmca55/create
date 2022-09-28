import { useState } from "react";
import './App.css';
import axios from "axios";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Admin from "./admin";
import Contact from "./Contact";

function App() {

  return (
    <div className="App">  
      <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

    </div>

  );
}

export default App;