import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './cslogo.png';
import './App.css';

class PropQ extends Component {
  constructor (props){
    super (props);

    const RContract = window.web3.eth.contract(
        [
          {
            "constant": false,
            "inputs": [
              {
                "name": "RegNum",
                "type": "string"
              },
              {
                "name": "description",
                "type": "string"
              },
              {
                "name": "Ptype",
                "type": "uint8"
              },
              {
                "name": "Pstat",
                "type": "uint8"
              },
              {
                "name": "newValue",
                "type": "uint256"
              }
            ],
            "name": "Build",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "kill",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "PRN",
                "type": "string"
              },
              {
                "name": "desc",
                "type": "string"
              }
            ],
            "name": "setDesc",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "PRN",
                "type": "string"
              },
              {
                "name": "value",
                "type": "uint8"
              }
            ],
            "name": "setStatus",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "PRN",
                "type": "string"
              },
              {
                "name": "value",
                "type": "uint8"
              }
            ],
            "name": "setType",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "PRN",
                "type": "string"
              },
              {
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "setValue",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "URN",
                "type": "bytes32"
              },
              {
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "setValueB",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "name": "d",
                "type": "string"
              }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "constructor"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "district",
            "outputs": [
              {
                "name": "",
                "type": "string"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "URN",
                "type": "bytes32"
              }
            ],
            "name": "getValue",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "inventory",
            "outputs": [
              {
                "name": "",
                "type": "bytes32"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "URN",
                "type": "bytes32"
              }
            ],
            "name": "isRegistered",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "",
                "type": "bytes32"
              }
            ],
            "name": "properties",
            "outputs": [
              {
                "name": "URN",
                "type": "bytes32"
              },
              {
                "name": "propertyDescription",
                "type": "string"
              },
              {
                "name": "propType",
                "type": "uint8"
              },
              {
                "name": "status",
                "type": "uint8"
              },
              {
                "name": "currentValue",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "registrar",
            "outputs": [
              {
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "showCount",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "PRN",
                "type": "string"
              }
            ],
            "name": "showProperty",
            "outputs": [
              {
                "name": "",
                "type": "string"
              },
              {
                "name": "",
                "type": "uint8"
              },
              {
                "name": "",
                "type": "uint8"
              },
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          }
        ]
    );

    this.state = {
      RegistryContract: RContract.at("0x322d8ca7d8d6957fe60d45cc11de654d16417ec4"),
      details: '', 
      URN: '', Desc: '', Type: '',Stat: '', Value: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    
    this.query = this.query.bind(this);
    this.counter = this.counter.bind(this);
    this.handleDetailsRequest = this.handleDetailsRequest.bind(this);
    this.kill = this.kill.bind(this);

  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value})
  }

// Property Contract code

  query () {
    const { district } = this.state.RegistryContract;
    district ((err, result) => {
      if (err) alert('Error', err);
      else {alert("District of "+result)}
    })
  }

  counter() {
    const { showCount } = this.state.RegistryContract;
    showCount ((err, result) => {
      if (err) alert('Error', err);
      else {alert("Total entries: "+result)}
    })
  }

  handleDetailsRequest(event) {
    event.preventDefault();
    const {showProperty} = this.state.RegistryContract;
    const {details: arg} = this.state;
    showProperty (arg, (err,result) => {
      if (err) alert ('Error', err);
      else { var ty = "";
            var st = "";
            if (result[1] == 0) { ty = "Unknown"}
            if (result[1] == 1) { ty = "Residential Property"}
            if (result[1] == 2) { ty = "Office Space"}
            if (result[1] == 3) { ty = "Commercial Premises"}
            if (result[1] == 4) { ty = "Industrial Premises"}
            if (result[1] == 5) { ty = "Agricultural Land"}
            if (result[1] == 6) { ty = "Public Amenity"}
            if (result[2] == 0) { st = "Unknown"} 
            if (result[2] == 1) { st = "Vacant"}
            if (result[2] == 2) { st = "Occupied"}
            if (result[2] == 3) { st = "Let"}
            if (result[2] == 4) { st = "Condemned"}
            if (result[2] == 5) { st = "Deleted"}

            alert("Details: "+result[0]+"\n"+"Type: "+ty+"\n"+"Status: "+st+"\n"+"Value: "+result[3])}
    })
  }

  kill () {
    const {kill} = this.state.RegistryContract;
    kill ((err, result) => {
      if (err) alert ('Try again', err);
      else {alert("Goodbye")}
    })
  }

// Here it comes       
  render (){
    return (
      <>

      <div className="Reg" id="qpr">
        <header> 
          Property Queries 
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <br /><br />
      </div>

      <div className ="qpr">

        <button onClick= {this.query}> Registration District? </button>
        <br /><br />

        <button onClick= {this.counter }> Registered Properties Total? </button>
        <br /><br />

        <form onSubmit={ this.handleDetailsRequest }>
          <label>
          Property Details for 
            <input
              type = "text"
              placeholder = "Enter PRN"
              name="details"
              value = {this.state.details}
              onChange={this.handleInputChange}/>
          </label>

          <button type="submit"> Submit </button>
        </form>
        <br /><br />

        <button onClick= {this.kill}> DESTROY REGISTER (really) </button>

        <br /><br />
        <a href = "#prop">Back</a>  
         <br /><br />    
   
      </div>

      <div className="Reg" id = "buy">
        <header >

        </header>
      </div>
      </>
    );
  }
}

export default PropQ;
