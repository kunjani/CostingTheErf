import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './cslogo.png';
import './App.css';

class Stub extends Component {

// Here it comes       
  render (){
    return (
      <>
      <div id = "treas">
        <header> 
          ~<em> STUB </em>~
          <img src={ logo } className="App-logo" alt="logo" />
        </header>

        <h2>  Coming Soon </h2>

        <br />
        <a href = "#top">Back</a>  
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

export default Stub;
