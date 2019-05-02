import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './cslogo.png';
import './App.css';

class TaxP extends Component {
  constructor (props){
    super (props);

    const TContract = window.web3.eth.contract(
      [
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
          "constant": false,
          "inputs": [],
          "name": "kill",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
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
          "inputs": [
            {
              "name": "TaxID",
              "type": "string"
            }
          ],
          "name": "whoIs",
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
              "name": "sender",
              "type": "address"
            }
          ],
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
              "name": "TaxID",
              "type": "string"
            }
          ],
          "name": "owesWhat",
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
          "inputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "payable": true,
          "stateMutability": "payable",
          "type": "fallback"
        }
      ]
    ); 

    this.state = {
      TreasuryContract: TContract.at("0x970ec85Eb0568Cdf4c4c40201D4fce9548c58A09"),
      name: '', owner: '', debtor: '',
      TID: '', Name: '', OType: '', OStat: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);

    this.countem = this.countem.bind(this);
    this.handleIDRequest = this.handleIDRequest.bind(this);
    this.handleOwnerReg = this.handleOwnerReg.bind(this);
    this.handleBalance = this.handleBalance.bind(this);
    this.handleTax = this.handleTax.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value})
  }

// Treasury Contract code

  countem() {
    const { showCount } = this.state.TreasuryContract;
    showCount ((err, result) => {
      if (err) alert('Error', err);
      else {alert("Total entries: "+result)}
    })
  }

  handleIDRequest(event) {
    event.preventDefault();
    const {whoIs} = this.state.TreasuryContract;
    const {name: arg} = this.state;
    whoIs (arg, (err,result) => {
      if (err) alert('Error', err);
      else {alert("Name is "+result)}
    })
  }

  handleOwnerReg(event){
    event.preventDefault();
    const {Apply} = this.state.TreasuryContract;
    const {TID: arg1} = this.state;
    const {Name: arg2} = this.state;
    const {OType: arg3} = this.state;
    const {OStat: arg4} = this.state;

    Apply (arg1, arg2, arg3, arg4,  (err, result) => {
      if (err) alert('Error', err);
      else {alert( "Entered Taxpayer "+arg1)}
      })
  }

  handleBalance (event) {
    event.preventDefault();
    const { findGBalance } = this.state.TreasuryContract;
    const {owner: arg} = this.state;
    findGBalance (arg, (err,result) => {
      if (err) alert('Error', err);
      else {alert(arg+" has "+result+"Gr")}
    })
  }

  handleTax (event) {
    event.preventDefault();
    const { owesWhat } = this.state.TreasuryContract;
    const {debtor: arg} = this.state;
    owesWhat (arg, (err,result) => {
      if (err) alert('Error', err);
      else {alert(arg+" owes "+result+"Gr")}
    })
  }

// Here it comes       
  render (){
    return (
      <>

      <div className="Reg" id="taxp">
        <header>
          Taxpayer Page
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
      </div>

      <div className = "prf" >
        <h2 className="App-title"> Taxpayer Registration Form </h2>
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
          <br />

        <h2 className="App-title"> Taxpayer Queries </h2>

          <button onClick= {this.countem }> Registration Total? </button>
          <br /><br />

          <form onSubmit={ this.handleIDRequest }>
            <label>
              Who is 
            <input
              type = "text"
              name="name"
              placeholder = "Enter TaxpayerID"
              value = {this.state.name}
              onChange={this.handleInputChange}/>
            </label>
            <button type="submit"> Submit </button>
          </form>

          <br /><br />
          <form onSubmit={ this.handleBalance }>
              <label>
                GRand Balance for  
              <input
                type = "text"
                name="owner"
                placeholder = "Enter TaxpayerID"
                value = {this.state.owner}
                onChange={this.handleInputChange}/>
                </label>
                <button type="submit"> Submit </button>
          </form>

          <br /><br />
          <form onSubmit={ this.handleTax }>
              <label>
                Taxes owed by  
              <input
                type = "text"
                name="debtor"
                placeholder = "Enter TaxpayerID"
                value = {this.state.debtor}
                onChange={this.handleInputChange}/>
                </label>
                <button type="submit"> Submit </button>
          </form>
          <br /><br />

        <Link to="/">Back</Link>
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

export default TaxP;