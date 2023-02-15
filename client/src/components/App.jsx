import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../assets/css/App.css';
import "../assets/images/Fondo.jpg";
import LandingPage from './LandingPage';
import Home from './Home';


function App() {
  return (
    <div className="App">
      
    
      <Routes>
        <Route exact path="/" element={<LandingPage/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>

    </Routes>
      
    </div>
  );
}

export default App;
