import React, { Component } from 'react';
import {BrowserRouter, Link,  Route} from 'react-router-dom';
import logo from './cslogo.png';
import './App.css';

import Top from './components/Top';

import Prop from './components/Prop';

import TaxP from './components/TaxP';


import Treas from './components/Stub';
import Pub from './components/Stub';

class App extends Component {
  render(){
    return (
      <>
        <div id = "top">
          <header> 
            ~<em> Fiscal Fantasia </em>~
          </header>

          <h2>  Home Page </h2>

          <a href ="#prop"> Land Registry </a>
          <br/><br/>

          <a href ="#taxp"> Taxpayers </a>
          <br/><br/>

          <a href = "#treas"> Treasury </a>
          <br/><br/>

          <a href = "#pub"> Public Information  </a>
          <br/><br/><br/>

        </div>

      <div id = "prop">
        <Prop>   
        </Prop>
      </div>

      <div className="Reg" id = "buy">
        <header>
        </header>
      </div>

      <div id = "taxp">
        <TaxP>   
        </TaxP>
      </div>

      <div className="Reg" id = "buy">
        <header>
        </header>
      </div>

      <div id = "treas">
        <Treas>   
        </Treas>
      </div>

      <div className="Reg" id = "buy">
        <header>
        </header>
      </div>

      <div id = "pub">
        <Pub>   
        </Pub>
      </div>

      <div className="Reg" id = "buy">
        <header>
        </header>
      </div>

      </>
    );
  }
}

export default App;
    
