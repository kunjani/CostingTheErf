import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './cslogo.png';
import './App.css';

class TaxP extends Component {

// Here it comes       
  render (){
    return (
      <>
      <div id = "top">
        <header> 
          Taxpayer Area
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <h2> </h2>
        <Link to="/Taxpayers/Register"> Register as a Taxpayer </Link>
        <br/><br/>

        <Link to="/Taxpayers/GRandBank"> GRand Bank Account </Link>
        <br/><br/>

        <Link to="/Taxpayers/Purchase"> Buy/Sell Property </Link>
        <br/><br/>

        <br />
        <Link to="/">Back</Link>  
         <br /><br />   
      </div>

      <div className="Reg" id = "buy">
        <header>
        </header>
      </div>

      </>
    );
  }
}

export default TaxP;
