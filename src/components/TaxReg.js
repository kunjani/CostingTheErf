import React, { Component } from 'react';
import logo from './cslogo.png';
import './App.css';

class TaxReg extends Component {
  constructor (props){
    super (props);

    const TContract = window.web3.eth.contract(
        [
          {
            "constant": false,
            "inputs": [
              {
                "name": "TaxID",
                "type": "string"
              },
              {
                "name": "Name",
                "type": "string"
              },
              {
                "name": "Type",
                "type": "uint8"
              },
              {
                "name": "Status",
                "type": "uint8"
              }
            ],
            "name": "Apply",
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
            "inputs": [
              {
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "deposit",
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
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "payTax",
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
                "name": "TID",
                "type": "bytes32"
              },
              {
                "name": "desc",
                "type": "string"
              }
            ],
            "name": "setDescB",
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
                "name": "TID",
                "type": "bytes32"
              },
              {
                "name": "value",
                "type": "uint8"
              }
            ],
            "name": "setStatusB",
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
                "name": "TID",
                "type": "bytes32"
              },
              {
                "name": "value",
                "type": "uint8"
              }
            ],
            "name": "setTypeB",
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
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "withdraw",
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
            "inputs": [
              {
                "name": "Buyer",
                "type": "address"
              },
              {
                "name": "Seller",
                "type": "address"
              },
              {
                "name": "Price",
                "type": "uint256"
              }
            ],
            "name": "Xfer",
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
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "sender",
                "type": "address"
              }
            ],
            "name": "accountholder",
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
                "name": "tokenOwner",
                "type": "address"
              }
            ],
            "name": "balanceOf",
            "outputs": [
              {
                "name": "balance",
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
            "name": "decimals",
            "outputs": [
              {
                "name": "",
                "type": "uint8"
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
                "name": "owner",
                "type": "string"
              }
            ],
            "name": "findGBalance",
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
                "name": "holder",
                "type": "address"
              }
            ],
            "name": "getBalance",
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
                "name": "Cash",
                "type": "uint256"
              }
            ],
            "name": "Gr2R",
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
                "type": "bytes32"
              }
            ],
            "name": "idLookup",
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
            "name": "Iowe",
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
            "inputs": [],
            "name": "myGBalance",
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
            "inputs": [],
            "name": "name",
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
                "type": "address"
              }
            ],
            "name": "owners",
            "outputs": [
              {
                "name": "TaxpayerID",
                "type": "bytes32"
              },
              {
                "name": "Name",
                "type": "string"
              },
              {
                "name": "account",
                "type": "address"
              },
              {
                "name": "Otype",
                "type": "uint8"
              },
              {
                "name": "Ostat",
                "type": "uint8"
              },
              {
                "name": "Tax",
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
                "name": "Cash",
                "type": "uint256"
              }
            ],
            "name": "R2Gr",
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
                "name": "a",
                "type": "uint256"
              },
              {
                "name": "b",
                "type": "uint256"
              }
            ],
            "name": "safeAdd",
            "outputs": [
              {
                "name": "c",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "a",
                "type": "uint256"
              },
              {
                "name": "b",
                "type": "uint256"
              }
            ],
            "name": "safeDiv",
            "outputs": [
              {
                "name": "c",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "a",
                "type": "uint256"
              },
              {
                "name": "b",
                "type": "uint256"
              }
            ],
            "name": "safeMul",
            "outputs": [
              {
                "name": "c",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "a",
                "type": "uint256"
              },
              {
                "name": "b",
                "type": "uint256"
              }
            ],
            "name": "safeSub",
            "outputs": [
              {
                "name": "c",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "pure",
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
            "inputs": [],
            "name": "symbol",
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
            "name": "taxpayers",
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
            "inputs": [],
            "name": "tokenSupply",
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
            "inputs": [],
            "name": "totalSupply",
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
            "inputs": [],
            "name": "treasurer",
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
            "name": "Whoami",
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
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          }
        ]
    ); 

    this.state = {
      TreasuryContract: TContract.at("0x6cc1835749d6dc73183932d21b3f6b2b85d90fc3"),
      name: '', owner: '', debtor: '',
      TID: '', Name: '', OType: '', OStat: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleOwnerReg = this.handleOwnerReg.bind(this);
    this.Whoami = this.Whoami.bind(this);
  }


  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value})
  }

// Treasury Contract code

  handleOwnerReg(event){
    event.preventDefault();
    const {Apply} = this.state.TreasuryContract;
    const {TID: arg1} = this.state;
    const {Name: arg2} = this.state;
    const {OType: arg3} = this.state;
    const {OStat: arg4} = this.state;

    Apply (arg1, arg2, arg3, arg4,  (err, result) => {
      if (err) alert('Registration failed', err);
      else {alert( "Entered Taxpayer "+arg1)}
      })
  }

    Whoami () {
    const {Whoami} = this.state.TreasuryContract;
    Whoami ((err, result) => {
      if (err) alert ("Can't find you", err);
      else {var ty = "";
            var st = "";
            if (result[1] == 0) { ty = "Unknown"}
            if (result[1] == 1) { ty = "Private Individual"}
            if (result[1] == 2) { ty = "Private Company"}
            if (result[1] == 3) { ty = "Registered Charity"}
            if (result[1] == 4) { ty = "State Organisation"}
            if (result[2] == 0) { st = "Unknown"} 
            if (result[2] == 1) { st = "Active"}
            if (result[2] == 2) { st = "Dispossessed"}
            if (result[2] == 3) { st = "Deceased/Defunct"}

            alert("Name: "+result[0]+"\n"+"   Type: "+ty+"\n"+"    Status: "+st)}

    })
  }

// Here it comes       
  render (){
    return (
      <>

      <div className="Reg" id="taxp">
        <header>
          Taxpayer Registration
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
      </div>

      <div className = "prf" >
        <h2 className="App-title"> Registration Form </h2>
        <form onSubmit = { this.handleOwnerReg } >
          <label>
          Taxpayer Identity Number 
          <input 
            type="text" 
            name="TID" 
            placeholder = "Enter TaxpayerID" 
            value={this.state.TID}
            onChange={this.handleInputChange}/>
          </label>
          <br/><br/>

          <label>
          Name
            <input name="Name" value={this.state.Name}
            onChange={this.handleInputChange}></input>
          </label>
          <br/><br/>
          
          <label>
          Taxpayer Type
            <select id = "" name="OType" value={this.state.OType}
            onChange={this.handleInputChange}>
              <option value = "0">Unknown</option>
              <option value = "1">Private Individual</option>
              <option value = "2">Private Company</option>
              <option value = "3">Registered Charity</option>
              <option value = "4">State Organisation</option>
            </select>
            </label>
            <br/><br/>

          <label>
          Taxpayer Status
            <select id = "" name="OStat" value={this.state.OStat}
            onChange={this.handleInputChange}>
              <option value = "0">Unknown</option>
              <option value = "1">Active</option>
              <option value = "2">Dispossessed</option>
              <option value = "3">Deceased/Defunct</option>
            </select>
            </label>
            <br/><br/>

            <button type="submit"> Submit </button>
          </form> 
          <br /><br />

           <h2 className="App-title"> Check </h2>

        <button onClick= {this.Whoami}> View Record </button>
        <br /><br />  

        <br />
        <a href = "#taxp">Back</a>  
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

export default TaxReg;