import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Top from './components/Top';

import Prop from './components/Prop';
import PropReg from './components/PropReg';
import PropChange from './components/PropChange';
import PropQ from './components/PropQ';

import TaxP from './components/TaxP';
import TaxReg from './components/TaxReg';
import Bank from './components/Bank';
import Buy from './components/Buy';

import Treas from './components/Stub';
import Pub from './components/Stub';

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

          <Route exact={true} path = "/LandRegistry" 
            render={() => (
              <div className="App">
               <Prop />
              </div>
          )}/>

          <Route exact={true} path = "/LandRegistry/Register" 
            render={() => (
              <div className="App">
               <PropReg />
              </div>
          )}/>

          <Route exact={true} path = "/LandRegistry/Update" 
            render={() => (
              <div className="App">
               <PropChange />
              </div>
          )}/>

          <Route exact={true} path = "/LandRegistry/Query" 
            render={() => (
              <div className="App">
               <PropQ />
              </div>
          )}/>

          <Route exact={true} path = "/Taxpayers" 
            render={() => (
              <div className="App">
               <TaxP />
              </div>
          )}/>

          <Route exact={true} path = "/Taxpayers/Register" 
            render={() => (
              <div className="App">
               <TaxReg />
              </div>
          )}/>

          <Route exact={true} path = "/Taxpayers/GRandBank" 
            render={() => (
              <div className="App">
               <Bank />
              </div>
          )}/>


          <Route exact={true} path = "/Taxpayers/Purchase" 
            render={() => (
              <div className="App">
               <Buy />
              </div>
          )}/>

          <Route exact={true} path = "/Revenue" 
            render={() => (
              <div className="App">
               <Treas />
              </div>
          )}/>

          <Route exact={true} path = "/Them" 
            render={() => (
              <div className="App">
               <Pub />
              </div>
          )}/>

        </div>

      </BrowserRouter>
    );
  }
}

export default App;
    
