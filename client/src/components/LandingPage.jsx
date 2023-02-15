import React from "react";
import { Link } from 'react-router-dom';
import "../assets/css/landingPage.css";



function LandingPage() {
    return (
       <>
      <div className="landingPage">
        <div className="title">
        <h1>Bienvenidos a mi PI</h1>
        </div>
        <div className="button-home">
        <button> 
            <Link to='/home'> 
            <h4>Home</h4>
            </Link>
        </button>
        </div>
       
      </div>
      
    </>
    );
  }
  
  export default LandingPage;
