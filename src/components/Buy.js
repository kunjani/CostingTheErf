import React, { Component } from 'react';
import logo from './cslogo.png';
import './App.css';

class Buy extends Component {
  constructor (props){
    super (props);

    const PContract = window.web3.eth.contract(
          [
            {
              "constant": false,
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
                  "name": "Property",
                  "type": "bytes32"
                },
                {
                  "name": "Price",
                  "type": "uint256"
                },
                {
                  "name": "title",
                  "type": "uint256"
                }
              ],
              "name": "approveOffer",
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
                  "name": "sender",
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
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "property",
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
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "property",
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
                  "name": "Estate",
                  "type": "string"
                },
                {
                  "name": "Stake",
                  "type": "uint16"
                },
                {
                  "name": "Price",
                  "type": "uint256"
                }
              ],
              "name": "Offer",
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
                  "name": "Buyer",
                  "type": "address"
                },
                {
                  "name": "Seller",
                  "type": "address"
                },
                {
                  "name": "Property",
                  "type": "bytes32"
                },
                {
                  "name": "DeedRef",
                  "type": "uint256"
                },
                {
                  "name": "Price",
                  "type": "uint256"
                }
              ],
              "name": "requestSale",
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
                  "name": "Estate",
                  "type": "string"
                }
              ],
              "name": "Settle",
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
                  "name": "property",
                  "type": "bytes32"
                },
                {
                  "name": "newValue",
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
              "inputs": [
                {
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "name": "BillOfSale",
              "outputs": [
                {
                  "name": "buyer",
                  "type": "address"
                },
                {
                  "name": "title",
                  "type": "uint256"
                },
                {
                  "name": "stake",
                  "type": "uint16"
                },
                {
                  "name": "price",
                  "type": "uint256"
                },
                {
                  "name": "date",
                  "type": "uint256"
                },
                {
                  "name": "fulfilled",
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
                  "type": "uint256"
                }
              ],
              "name": "Deeds",
              "outputs": [
                {
                  "name": "property",
                  "type": "bytes32"
                },
                {
                  "name": "holder",
                  "type": "bytes32"
                },
                {
                  "name": "stake",
                  "type": "uint16"
                },
                {
                  "name": "acquired",
                  "type": "uint256"
                },
                {
                  "name": "lost",
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
                  "type": "address"
                },
                {
                  "name": "",
                  "type": "bytes32"
                },
                {
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "escrow",
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
                },
                {
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "Holdings",
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
                },
                {
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "Possessors",
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
              "inputs": [
                {
                  "name": "source",
                  "type": "string"
                }
              ],
              "name": "S2B",
              "outputs": [
                {
                  "name": "result",
                  "type": "bytes32"
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
            }
          ]
              );

    this.state = {
      PurchaseContract: PContract.at("0xb1691bec9125a550e35077ad96f501443e2f8226"),
      Estate: '', Stake: '', Price: '',
      myPLace: '',
  }

    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleOffer = this.handleOffer.bind(this);
    this.handleSettlement = this.handleSettlement.bind(this);
}

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value})
  }

  // Purchase Contract code

  handleOffer(event) {
    event.preventDefault();
    const {Offer} = this.state.PurchaseContract;
    const {Estate: arg1} = this.state;
    const {Stake: arg2} = this.state;
    const {Price: arg3} = this.state;
    Offer (arg1, arg2, arg3, 
      (err,result) => {
      if (err) alert('Error', err);
      else { if (!result) alert ("No chance");
            else {if (arg3==0) alert ("You are an owner of " +arg1);
                  else {alert("Bid made for "+arg1)}
                  }
            } 
    })
  }

  handleSettlement(event) {
    event.preventDefault();
    const {Settle} = this.state.PurchaseContract;
    const {myPlace: arg} = this.state;
    Settle (arg, (err,result) => {
      if (err) alert('Error', err);
      else {alert("You have just sold "+arg)}
    })
  }

// Here it comes       
  render (){
    return (
      <>

      <div className="Reg" id = "buy">
        <header >
          Property Purchase
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
      </div>

      <div className ="prf">
          <h2> Offer to purchase </h2>

            <form onSubmit = { this.handleOffer } >
              <label>
              Property Registration Number
              <input 
                type="text" 
                name="Estate" 
                placeholder = "Enter PRN" 
                value={this.state.Estate}
                onChange={this.handleInputChange}/>
              </label>
              <br/><br/>
              
              <label>
              Requested Stake          
              <input type = "text"
                placeholder = "up to 10000" 
                name="Stake" value={this.state.Stake}
                onChange={this.handleInputChange}></input>
              </label>
              <br/><br/>
              
              <label>
              Proposed Price         
              <input type = "text"
                placeholder = "0" 
                name="Price" value={this.state.Price}
                onChange={this.handleInputChange}></input>
              </label>
              <br/><br/>

            <button type="submit"> Submit </button>
            <br/><br/>
          </form> 
      </div>

      <div className ="qpr">
          <h2 className="App-title"> Accept purchase offer </h2>

            <form onSubmit = { this.handleSettlement } >
              <label>
              Property Registration Number
              <input 
                type="text" 
                name="myPlace" 
                placeholder = "Enter PRN" 
                value={this.state.myPlace}
                onChange={this.handleInputChange}/>
              </label>
              <br /><br />
              <button type="submit"> Submit </button>
              <br /><br />
            </form> 

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

export default Buy;
