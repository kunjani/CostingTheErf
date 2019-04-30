import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './cslogo.png';
import './App.css';

class Prop extends Component {

// Here it comes       
  render (){
    return (
      <>
      <div id = "top">
        <header> 
          Land Registry
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <h2> </h2>
        <Link to="/LandRegistry/Register"> Register a Property </Link>
        <br/><br/>

        <Link to="/LandRegistry/Update"> Amend a Property Record </Link>
        <br/><br/>

        <Link to="/LandRegistry/Query"> Query the Property Register </Link>
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

export default Prop;
