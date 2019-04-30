import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './cslogo.png';
import './App.css';

class PropReg extends Component {
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
    
    this.handlePropReg = this.handlePropReg.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value})
  }

// Property Contract code



  handlePropReg(event){
    event.preventDefault();
    const {Build} = this.state.RegistryContract;
    const {URN: arg1} = this.state;
    const {Desc: arg2} = this.state;
    const {Type: arg3} = this.state;
    const {Stat: arg4} = this.state;
    const {Value: arg5} = this.state;

    Build (arg1, arg2, arg3, arg4, arg5, (err, result) => {
      if (err) alert('Error', err);
      else { alert( "Entered property data "+arg1)}
      })
  }

// Here it comes       
  render (){
    return (
      <>

      <div className="Reg" id="prop">
        <header> 
          Land Registry
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
      </div>

      <div className ="prf" >
        <h2>  Registration Form</h2>
        <form onSubmit = { this.handlePropReg } >
          <label>
          Property Registration Number
          <input 
            type="text" 
            name="URN" 
            placeholder = "Enter PRN" 
            value={this.state.URN}
            onChange={this.handleInputChange}/>
          </label>
          <br/><br/>
          
          <label>
          Property Description         
            <input type = "text"
            name="Desc" value={this.state.Desc}
            onChange={this.handleInputChange}></input>
          </label>
          <br/><br/>
          
          <label>
          Property Type
            <select id = "" name="Type" value={this.state.Type}
            onChange={this.handleInputChange}>
              <option value = "0">Unknown</option>
              <option value = "1">Residential Property</option>
              <option value = "2">Office Space</option>
              <option value = "3">Commercial Premises</option>
              <option value = "4">Industrial Premises</option>
              <option value = "5">Agricultural Land</option>
              <option value = "6">Public Amenity</option>
            </select>
          </label>
          <br/><br/>

          <label>
          Property Status
            <select id = "" name="Stat" value={this.state.Stat}
            onChange={this.handleInputChange}>
              <option value = "0">Unknown</option>
              <option value = "1">Vacant</option>
              <option value = "2">Occupied</option>
              <option value = "3">Let</option>
              <option value = "4">Condemned</option>
            </select>
          </label>
          <br/><br/>

          <label>
           Current Value
            <input type="text" name="Value" value={this.state.Value}
            onChange={this.handleInputChange}></input>
          </label>
          <br/><br/>

          <button type="submit"> Submit </button>
        </form> 
        <br/><br/><br />
        
        <Link to="/LandRegistry">Back</Link>  
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

export default PropReg;
