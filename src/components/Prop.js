import React, { Component } from 'react';
import logo from './cslogo.png';
import './App.css';
import PropReg from './PropReg';
import PropChange from './PropChange';
import PropQ from './PropQ';

class Prop extends Component {

// Here it comes       
  render (){
    return (
      <>
      <div id = "prop">
        <header> 
          Land Registry
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <h2> </h2>
        <a href = "#preg"> Register a Property </a>
        <br/><br/>

        <a href = "#apr"> Amend a Property Record </a>
        <br/><br/>

        <a href = "#qpr"> Query the Property Register </a>
        <br/><br/>
        <br />
        <a href = "#top">Back</a>  
         <br /><br />   
      </div>

      <div className="Reg" id = "buy">
        <header>
        </header>
      </div>

      <div id = "preg">
        <PropReg>   
        </PropReg>
      </div>

      <div className="Reg" id = "buy">
        <header>
        </header>
      </div>

      <div id = "apr">
        <PropChange>   
        </PropChange>
      </div>

      <div className="Reg" id = "buy">
        <header>
        </header>
      </div>

      <div id = "qpr">
        <PropQ>   
        </PropQ>
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
