import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props){
    super (props);

    const Contract = window.web3.eth.contract(
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
              "type": "uint256"
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
              "type": "uint16"
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
              "type": "uint256"
            },
            {
              "name": "status",
              "type": "uint256"
            },
            {
              "name": "currentValue",
              "type": "uint256"
            },
            {
              "name": "owner",
              "type": "bytes32"
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
              "type": "uint16"
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
              "name": "RegNum",
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
              "name": "RegNum",
              "type": "string"
            }
          ],
          "name": "whoOwns",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ]
    );

    this.state = {
      ContractInstance: Contract.at('0x970ec85eb0568cdf4c4c40201d4fce9548c58a09'),
      details: '', owner: '',
      URN: '', Desc: '', Type: '', Value: ''
    }

    this.query = this.query.bind(this);
    this.counter = this.counter.bind(this);
    this.handleDetailsRequest = this.handleDetailsRequest.bind(this);
    this.handleOwnershipRequest = this.handleOwnershipRequest.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePropReg = this.handlePropReg.bind(this);
    this.myFunction = this.myFunction.bind(this);
  }

  query () {
    const { district } = this.state.ContractInstance;

    district ((err, result) => {
      if (err) console.error('Error', err);
      console.log ('District is:::', result);
      alert("District of "+result);
      var btn = document.createElement("LABEL");
      var t = document.createTextNode("District of "+result);
      btn.appendChild(t);
      document.body.appendChild(btn)
    })
  }

  counter() {
    const { showCount } = this.state.ContractInstance;

    showCount ((err, result) => {
      if (err) console.error('Error', err);
      console.log ('Total is:::', result);
      alert("Total entries: "+result)
    })
  }

  handleDetailsRequest(event) {

    event.preventDefault();

    const {showProperty} = this.state.ContractInstance;
    const {details: arg} = this.state;
    showProperty (arg,
        (err,result) => {console.log(':::', result);
        alert("Details: "+result[0]+"    Value: "+result[1])
    })

  }

  handleOwnershipRequest(event) {

    event.preventDefault();

    const {whoOwns} = this.state.ContractInstance;
    const {owner: arg} = this.state;
    whoOwns (arg,
        (err,result) => {console.log(':::', result);
        alert("Owner is "+result)
    })

  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handlePropReg(event){

    event.preventDefault();

    const {Build} = this.state.ContractInstance;
    const {URN: arg1} = this.state;
    const {Desc: arg2} = this.state;
    const {Type: arg3} = this.state;
    const {Value: arg4} = this.state;

    Build (arg1, arg2, arg3, arg4,
      (err, result) => {
        if (err) console.error('Error', err);
        console.log(':::', result);
        alert( "Entered property "+arg1)
      })
  }

  myFunction() {
    alert("HereI am");
    var btn = document.createElement("LABEL");
    var t = document.createTextNode("here is the label");
    btn.appendChild(t);
    document.body.appendChild(btn)
  }



  render (){
    return (<>

      <div className="Reg">
        <header className ="Register">
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
      </div>

      <div>
        <h2>Property Registration Form</h2>

        <form onSubmit = { this.handlePropReg } >
          <label>
          Property Registration Number: 
          <input 
            type="text" 
            name="URN" 
            placeholder = "Enter URN" 
            value={this.state.URN}
            onChange={this.handleInputChange}/>
          </label>
          <br/><br/>
          
          <label>
          Property Description:
            <input name="Desc" value={this.state.Desc}
            onChange={this.handleInputChange}></input>
          </label>
          <br/><br/>
          
          <label>
          Property Type:
            <select id = "" name="Type" value={this.state.Type}
            onChange={this.handleInputChange}>
              <option value = "0">Residential Property</option>
              <option value = "1">Office Space</option>
              <option value = "2">Commercial Premises</option>
              <option value = "3">Industrial Premises</option>
              <option value = "4">Agricultural Land</option>
              <option value = "5">Public Space</option>
            </select>
            </label>
            <br/><br/>

           <label>
           Current Value:
            <input type="text" name="Value" value={this.state.Value}
            onChange={this.handleInputChange}></input>
            </label>
            <br/><br/>

            <button type="submit"> Submit </button>
          </form> 
          <br/><br/>
        </div>

        <div>
          <h2 className="App-title"> Register Query Form </h2>

            <button onClick= {this.query}> District </button>
            <br /><br />

            <button onClick= {this.counter }> Number of Entries </button>
            <br /><br />

            <form onSubmit={ this.handleDetailsRequest }>
              <label>
                Property Details for: 
              <input
                type = "text"
                placeholder = "Enter URN"
                name="details"
                value = {this.state.details}
                onChange={this.handleInputChange}/>
                </label>
                <button type="submit"> Submit </button>
            </form>
            <br />

            <form onSubmit={ this.handleOwnershipRequest }>
              <label>
                Who owns: 
              <input
                type = "text"
                name="owner"
                placeholder = "Enter URN"
                value = {this.state.owner}
                onChange={this.handleInputChange}/>
                </label>
                <button type="submit"> Submit </button>
            </form>
            <br /><br />
          </div>

       </>
      );
  }
}

export default App;
