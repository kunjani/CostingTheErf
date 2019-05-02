import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './cslogo.png';
import './App.css';

class Stub extends Component {

// Here it comes       
  render (){
    return (
      <>
      <div id = "top">
        <header> 
          ~<em> STUB </em>~
          <img src={ logo } className="App-logo" alt="logo" />
        </header>

        <h2>  Coming Soon </h2>

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

export default Stub;
