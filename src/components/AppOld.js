import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './cslogo.png';
import './App.css';

class App extends Component {
  constructor (props){
    super (props);
  }


// Here it comes       
  render (){
    return (
      
      <div id = "top">
        <header> 
          ~<em> Fiscal Fantasia </em>~
        </header>

        <main>
          {this.props.children}
        </main>
      </div>
    );
  }      
}

export default App;
