import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './cslogo.png';
import './App.css';

class PropChange extends Component {
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
    
    this.handleDetailsRequest = this.handleDetailsRequest.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
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

  handleDetailsRequest(event) {
    event.preventDefault();
    const {showProperty} = this.state.RegistryContract;
    const {URN: arg} = this.state;
    showProperty (arg, (err,result) => {
      if (err) alert ('Error', err);
      else { alert("Details: "+result[0]+"   Type: "+result[1]+"    Status: "+result[2]+"    Value: "+result[3])}
    })
  }

  handleDescChange(event){
    event.preventDefault();
    const {setDesc} = this.state.RegistryContract;
    const {Desc: arg} = this.state;
    const {URN: urn} = this.state;
    setDesc (urn, arg, (err, result) => {
      if (err) alert('Error', err);
      else { alert( "Property description changed")}
      })
  }

  handleTypeChange(event){
    event.preventDefault();
    const {setType} = this.state.RegistryContract;
    const {Type: arg} = this.state;
    const {URN: urn} = this.state;
    setType (urn, arg, (err, result) => {
      if (err) alert('Error', err);
      else { alert( "Property type changed")}
      })
  }

    handleStatusChange(event){
    event.preventDefault();
    const {setStatus} = this.state.RegistryContract;
    const {Stat: arg} = this.state;
    const {URN: urn} = this.state;
    setStatus (urn, arg, (err, result) => {
      if (err) alert('Error', err);
      else { alert( "Property status changed")}
      })
  }

    handleValueChange(event){
    event.preventDefault();
    const {setValue} = this.state.RegistryContract;
    const {Value: arg} = this.state;
    const {URN: urn} = this.state;
    setValue (urn, arg, (err, result) => {
      if (err) alert('Error', err);
      else { alert( "Property value = "+arg)}
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

      <div classname = "details" >
      <h2>  Property Registration Number:</h2>

        <form onSubmit={ this.handleDetailsRequest }>
          <label>
          Enter here to check record 
            <input
              type = "text"
              placeholder = " PRN"
              name="URN"
              value = {this.state.urn}
              onChange={this.handleInputChange}/>
          </label>

          <button type="submit"> Submit </button>
         </form> 
         <br/>
      </div>

      <div className ="prf" >
        <h2>  Update details:</h2>

        <form onSubmit = { this.handleDescChange } >
          <label>
          Property Description         
            <input type = "text"
            placeholder = " "
            name="Desc" value={this.state.Desc}
            onChange={this.handleInputChange}></input>
          </label>
          <button type="submit"> Submit </button>
         </form>           
         <br/><br/>

        <form onSubmit={ this.handleTypeChange }>
          <label>
          Property Type
            <select id = "" name="Type" value={this.state.Type}
            onChange={this.handleInputChange}>
              <option value="" disabled selected hidden>Please Choose...</option>
              <option value = "0">Unknown</option>
              <option value = "1">Residential Property</option>
              <option value = "2">Office Space</option>
              <option value = "3">Commercial Premises</option>
              <option value = "4">Industrial Premises</option>
              <option value = "5">Agricultural Land</option>
              <option value = "6">Public Amenity</option>
            </select>
          </label>

          <button type="submit"> Submit </button>
         </form> 
         <br/><br/>

        <form onSubmit={ this.handleStatusChange }>
          <label>
          Property Status
            <select id = "" name="Stat" value={this.state.Stat}
            onChange={this.handleInputChange}>
              <option value="" disabled selected hidden>Please Choose...</option>
              <option value = "0">Unknown</option>
              <option value = "1">Vacant</option>
              <option value = "2">Occupied</option>
              <option value = "3">Let</option>
              <option value = "4">Condemned</option>
              <option value = "5">Deleted</option>
            </select>
          </label>

          <button type="submit"> Submit </button>
          </form> 
          <br/><br/>

        <form onSubmit={ this.handleValueChange }>
          <label>
           Current Value
            <input type="text" name="Value" 
            placeholder = " 0" value={this.state.Value}
            onChange={this.handleInputChange}></input>
          </label>

          <button type="submit"> Submit </button>
          </form> 
          <br/><br/>
      </div>

      <div className ="qpr">

        <br /><br />
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

export default PropChange;
