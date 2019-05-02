import React, { Component } from 'react';
import logo from './cslogo.png';
import './App.css';

class App extends Component {
  constructor (props){
    super (props);

    const RContract = window.web3.eth.contract(
[
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
        "name": "URN",
        "type": "bytes32"
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
    "inputs": [
      {
        "name": "d",
        "type": "string"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "constructor"
  }
]
    );

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
    "inputs": [],
    "name": "myGBalance",
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
    "inputs": [],
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
  }
]
    );

    this.state = {
      RegistryContract: RContract.at("0x0dae2986ff7c5b60aaD80e5eCAc4a91eD406914f"),
      details: '', 
      URN: '', Desc: '', Type: '',Stat: '', Value: '',

      TreasuryContract: TContract.at("0x970ec85Eb0568Cdf4c4c40201D4fce9548c58A09"),
      name: '', owner: '', debtor: '',
      TID: '', Name: '', OType: '', OStat: '',
      GCash: '', RCash: '', CashIn: '', CashOut: '',  

      PurchaseContract: PContract.at("0xeb6fc3006ea6a51df81a89e842bac8cd0122c6b4"),
      Estate: '', Stake: '', Price: '',
      myPLace: '',

// Land Bank data
//      Balance: '', 
//      Card: '', Expires: '', CVV: '', Amount: '',
//      Payee: '', Payment: ''
  }

    this.query = this.query.bind(this);
    this.counter = this.counter.bind(this);
    this.handleDetailsRequest = this.handleDetailsRequest.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePropReg = this.handlePropReg.bind(this);

    this.countem = this.countem.bind(this);
    this.handleIDRequest = this.handleIDRequest.bind(this);
    this.handleOwnerReg = this.handleOwnerReg.bind(this);

    this.handleOffer = this.handleOffer.bind(this);
    this.handleSettlement = this.handleSettlement.bind(this);

    this.handleBalance = this.handleBalance.bind(this);
    this.handleMyBalance = this.handleMyBalance.bind(this);
    this.handleGRConversion = this.handleGRConversion.bind(this);
    this.handleRGConversion = this.handleRGConversion.bind(this);
    this.handleDeposit = this.handleDeposit.bind(this);
    this.handleWithdrawal = this.handleWithdrawal.bind(this);
    this.handleTax = this.handleTax.bind(this);
}

// Property Contract code

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value})
  }

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
      else { alert("Details: "+result[0]+"   Type: "+result[1]+"    Status: "+result[2]+"    Value: "+result[3])}
    })
  }

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
      else {alert("Bid made for "+arg1);
            }
      }
    )
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

  handleMyBalance () {
    const { myGBalance} = this.state.PurchaseContract;
    myGBalance ((err, result) => {
      if (err) alert('Error', err);
      else {alert("You have "+result+"Gr")};
    })
  }

// Here it comes       
  render (){
    return (
      <>
      <div id = "top">
        <header> 
          ~<em> Fiscal Fantasia </em>~
        </header>

        <h2>  Home Page </h2>
        <a href="#prop"> Property Register </a><br/><br/>

        <a href="#taxp"> Taxpayer Page </a><br/><br/>

        <a href="#bank"> G.Rand Bank </a><br/><br/>

        <a href="#buy"> Purchase a Property </a><br/><br/><br/>
      </div>

      <div className="Reg" id="prop">
        <header> 
          Property Register
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
          <br/><br/>
      </div>

      <div className ="qpr">
          <h2 className="App-title"> Property Queries </h2>

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
            <br />
            <br />
            <a href="#top"> Back </a><br/><br/>
      </div>

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
                G.Rand Balance for  
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
          <br /><br /><br />

          <a href="#top"> Back </a><br/><br/>
      </div>

      <div className="Reg" id = "bank">
        <header >
          G.Rand Bank
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
      </div>

      <div className ="qpr">

        <h2>My G.Rand Account</h2>     
          <form onSubmit={ this.handleBalance }>
              <label>
                My Balance 
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

        <h2>Currency Exchange</h2>
          <form onSubmit={ this.handleDeposit }>
              <label>
                Buy G.Rand   
              <input
                type = "text"
                name="CashIn"
                placeholder = "how many"
                value = {this.state.CashIn}
                onChange={this.handleInputChange}/>
                </label>
                <button type="submit"> Submit </button>
          </form>
          <br /><br />

          <form onSubmit={ this.handleWithdrawal }>
              <label>
                Sell G.Rand  
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

        <h2>Exchange Rates</h2>
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
          <br /><br />

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

          <br /><br /><br />
          <a href="#top"> Back </a><br/><br/>
      </div>

      <div className="Reg" id = "buy">
        <header >
          Purchase Property
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
                  <br /><br />
            <a href="#top"> Back </a><br/><br/>
      </div>

      <div className="Reg" id = "buy">
        <header >

        </header>
      </div>
      </>

      );
  }
}

export default App;
