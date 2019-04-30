import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import logo from './cslogo.png';
import './App.css';

class Top extends Component {

// Here it comes       
  render (){
    return (
      <>
      <div id = "top">
        <header> 
          ~<em> Fiscal Fantasia </em>~
        </header>

        <h2>  Home Page </h2>

        <Link to="/LandRegistry"> Land Registry </Link>
        <br/><br/>

        <Link to="/Taxpayers"> Taxpayers </Link>
        <br/><br/>

        <Link to="/Revenue"> Treasury </Link>
        <br/><br/>

        <Link to="/Them"> Public Information  </Link>
        <br/><br/><br/>

      </div>

      <div className="Reg" id = "buy">
        <header>
        </header>
      </div>
      </>
    );
  }
}

export default Top;
