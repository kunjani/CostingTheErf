import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './cslogo.png';
import './App.css';

class Bank extends Component {
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
          }
        ]

    ); 

    this.state = {
      TreasuryContract: TContract.at("0x970ec85eb0568cdf4c4c40201d4fce9548c58a09"),
      owner: '',
      GCash: '', RCash: '', CashIn: '', CashOut: ''
    }
    
    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleBalance = this.handleBalance.bind(this);
    this.handleGRConversion = this.handleGRConversion.bind(this);
    this.handleRGConversion = this.handleRGConversion.bind(this);
    this.handleDeposit = this.handleDeposit.bind(this);
    this.handleWithdrawal = this.handleWithdrawal.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.handlePayment = this.handlePayment.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value})
  }

// Land Bank contract code

  handleGRConversion(event) {
    event.preventDefault();
    const {Gr2R} = this.state.TreasuryContract;
    const {GCash: arg} = this.state;
    Gr2R (arg, (err,result) => {
      if (err) alert('Error', err);
      else {alert(arg+" comes to "+result+" in R")}
    })
  }

  handleRGConversion(event) {
    event.preventDefault();
    const {R2Gr} = this.state.TreasuryContract;
    const {RCash: arg} = this.state;
    R2Gr (arg, (err,result) => {
      if (err) alert('Error', err);
      else {alert(arg+" comes to "+result+" in Gr")}
    })
  }

  handleDeposit(event) {
    event.preventDefault();
    const {deposit} = this.state.TreasuryContract;
    const {CashIn: arg} = this.state;
    deposit (arg, (err,result) => {
      if (err) alert('Error', err);
      else {alert(arg+"Gr deposited in your account")}
    })
  }

  handleWithdrawal(event) {
    event.preventDefault();
    const {withdraw} = this.state.TreasuryContract;
    const {CashOut: arg} = this.state;
    withdraw (arg, (err,result) => {
      if (err) alert('Error', err);
      else {alert(arg+"Gr withdrawn from your account")}
    })
  }

  handleBalance () {
 //   event.preventDefault();
    const { myGBalance } = this.state.TreasuryContract;
//    const {owner: arg} = this.state;
    myGBalance ((err,result) => {
      if (err) alert('Error', err);
      else {alert("You have "+result+"Gr")}
    })
  }

    handleQuery () {
 //   event.preventDefault();
    const { Iowe } = this.state.TreasuryContract;
//    const {owner: arg} = this.state;
    Iowe ((err,result) => {
      if (err) alert('Error', err);
      else {alert("You owe "+result+"Gr")}
    })
  }

    handlePayment(event) {
    event.preventDefault();
    const {payTax} = this.state.TreasuryContract;
    const {TaxOut: arg} = this.state;
    payTax (arg, (err,result) => {
      if (err) alert('Error', err);
      else {alert(arg+"Gr set against your tax bill")}
    })
  }

// Here it comes       
  render (){
    return (
      <>
      <div className="Reg" id = "bank">
        <header >
          G.Rand Bank
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
      </div>

      <div className ="qpr">

          <h2>My Account</h2>

        <button onClick= {this.handleBalance}> My Balance? </button>
        <br /><br />

          <form onSubmit={ this.handleDeposit }>
              <label>
                Buy GRand   
              <input
                type = "text"
                name="CashIn"
                placeholder = "how many"
                value = {this.state.CashIn}
                onChange={this.handleInputChange}/>
                </label>
                <button type="submit"> Submit </button>
          </form>
          <br />

          <form onSubmit={ this.handleWithdrawal }>
              <label>
                Sell GRand  
              <input
                type = "text"
                name="CashOut"
                placeholder = "how many"
                value = {this.state.CashOut}
                onChange={this.handleInputChange}/>
                </label>
                <button type="submit"> Submit </button>
          </form>
          <br /><br />


        <h2>My Taxes</h2>

        <button onClick= {this.handleQuery}> My Tax Bill? </button>
        <br /><br />

        <form onSubmit={ this.handlePayment }>
              <label>
                Pay taxes  
              <input
                type = "text"
                name="CashOut"
                placeholder = "how much"
                value = {this.state.TaxOut}
                onChange={this.handleInputChange}/>
                </label>
                <button type="submit"> Submit </button>
          </form>
          <br /><br />

        <h2>Rates</h2>
          <form onSubmit={ this.handleGRConversion }>
              <label>
                Convert Gr to R
              <input
                type = "text"
                name="GCash"
                placeholder = " amount in Gr" 
                value = {this.state.GCash}
                onChange={this.handleInputChange}/>
                </label>
                <button type="submit"> Submit </button>
          </form>
          <br />

          <form onSubmit={ this.handleRGConversion }>
              <label>
                Convert R to Gr
              <input
                type = "text"
                name="RCash"
                placeholder = " amount in R" 
                value = {this.state.RCash}
                onChange={this.handleInputChange}/>
                </label>
                <button type="submit"> Submit </button>
          </form>
          <br /><br />

          <Link to="/Taxpayers">Back</Link>
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

export default Bank;