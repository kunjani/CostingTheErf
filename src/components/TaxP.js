import React, { Component } from 'react';
import logo from './cslogo.png';
import './App.css';
import TaxReg from './TaxReg';
import Bank from './Bank';
import Buy from './Buy';

class TaxP extends Component {

// Here it comes       
  render (){
    return (
      <>
      <div id = "taxp">
        <header> 
          Taxpayer Area
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <h2> </h2>
        <a href = "#treg"> Register as a Taxpayer </a>
        <br/><br/>

        <a href = "#bank"> GRand Bank Account </a>
        <br/><br/>

        <a href = "#get"> Buy/Sell Property </a>
        <br/><br/>

        <br />
        <a href = "#top">Back</a>  
         <br /><br />    
      </div>

      <div className="Reg" id = "buy">
        <header>
        </header>
      </div>

      <div id = "treg">
        <TaxReg>   
        </TaxReg>
      </div>

      <div className="Reg" id = "buy">
        <header>
        </header>
      </div>

      <div id = "bank">
        <Bank>   
        </Bank>
      </div>

      <div className="Reg" id = "buy">
        <header>
        </header>
      </div>

      <div id = "get">
        <Buy>   
        </Buy>
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
