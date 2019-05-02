import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Top from './components/Top';
import Prop from './components/Prop';
import TaxP from './components/TaxP';
import Bank from './components/Bank';
import Buy from './components/Buy';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path = "/" 
            render={() => (
              <div className="App">
               <Top />
              </div>
          )}/>

          <Route exact={true} path = "/registry" 
            render={() => (
              <div className="App">
               <Prop />
              </div>
          )}/>

          <Route exact={true} path = "/taxpayers" 
            render={() => (
              <div className="App">
               <TaxP />
              </div>
          )}/>

          <Route exact={true} path = "/Bank" 
            render={() => (
              <div className="App">
               <Bank />
              </div>
          )}/>

          <Route exact={true} path = "/Buy" 
            render={() => (
              <div className="App">
               <Buy />
              </div>
          )}/>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
    
