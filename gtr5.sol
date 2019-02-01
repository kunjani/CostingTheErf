pragma solidity ^0.5.2;

// GTR5 - one owner owns one property

contract Register {

	string public district;
	address payable public registrar;
	address payable public treasurer;

	constructor (string memory d) public payable {
		district = d;
		registrar = msg.sender;
	}
	
// Settings
// Property characteristics
    bytes16[] public Status;
    uint8 constant PropertyType = 6;

    function setupPropertyModel() public RegOnly {
        Status.push ("Vacant");
		Status.push ("Occupied");
		Status.push ("Let");
		Status.push ("Condemned");
    }
// Owner characteristics
    uint8 constant OwnerType = 4;

// Treasury rates 
    uint8 constant TaxLimit = 10;
// Annual taxation as a percentage of current property value    
    mapping (uint8 => uint8) public PropRate;
// Modifier in respect of different Owner types
    mapping (uint8 => uint8) public OwnRate;

// UTILITY FUNCTIONS 	
// copied from Ethereum Stack Exchange. Thanks 'eth'
    function B2S(bytes32 x) pure internal returns (string memory) {
        bytes memory bytesString = new bytes(32);
        uint charCount = 0;
        for (uint j = 0; j < 32; j++) {
            byte char = byte(bytes32(uint(x) * 2 ** (8 * j)));
            if (char != 0) {
                bytesString[charCount] = char;
                charCount++;
            }
        }
        bytes memory bytesStringTrimmed = new bytes(charCount);
        for (uint j = 0; j < charCount; j++) {
            bytesStringTrimmed[j] = bytesString[j];
        }
        return string(bytesStringTrimmed);
    }
        
// copied from Ethereum Stack Exchange. Thanks Nikola Klipa
    function S2B(string memory source) pure public returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }
    
        assembly {
            result := mload(add(source, 32))
        }
    }

//
// Define properties data structure
// each property distinguished by Unique Reference Number (URN)

	struct Property {
	    bytes32 URN;            
		string propertyDescription;
		uint propType;
		uint status;
		uint currentValue;
		bytes32 owner;
	}

    mapping (bytes32 => Property) public properties;
	bytes32[] public inventory;

	modifier RegOnly () {
		require (msg.sender == registrar);
		_;
	}

// create property entries with Build
	function Build(string memory RegNum, string memory description, uint Ptype, uint newValue) public RegOnly  returns (bool success) {
		bytes32 urn = S2B(RegNum);
		if (properties[urn].URN == 0x0 && Ptype < PropertyType){
    		Property memory newProperty = Property({
    		    URN: urn,
    			propertyDescription: description,
    			propType: Ptype,
    			status: 0,
    			currentValue: newValue,
    			owner: 0x0
    		});
		    properties[urn] = newProperty;
		    inventory.push(urn);
		    return true;
		} else {
		    return false;
		}
	}

// /////////////////////////////////
//	struct TaxDemand {
//		string date;
//		uint amount;
//	}
//	
//    TaxDemand[] public Taxbill;

// Define Proprietor data structure. Key field is TaxpayerID
    
	struct Owner {
		bytes32 TaxpayerID;
		string Name;
		address payable account;
		uint OType;
		bytes32 URN;
		uint Tax;
	}
	
	mapping (bytes32 => Owner) public owners;
	bytes32[] public taxpayers;
		
	function Apply(string memory TaxID, string memory Name, uint OType) public returns (bool success) {
		bytes32 TID = S2B(TaxID);
		if (owners[TID].TaxpayerID == 0x0 && OType <= OwnerType){
    	    Owner memory applicant = Owner({
    	        TaxpayerID: TID,
    	        Name: Name,
    	        account: msg.sender,
    	        OType: OType,
    	        URN: 0x0,
    	        Tax: 0
    	    });
		    owners[TID] = applicant;
		    taxpayers.push(TID);
		    return true;
		} else {
		    return false;
		}
	}

	function BuyB(bytes32 buyer, bytes32 property, uint price) internal returns (bool success) {
	    if (owners[buyer].TaxpayerID == buyer && properties[property].URN == property) {
// remove old owner
        if (properties[property].owner != 0x0){
            owners[properties[property].owner].URN = 0x0;
        }
//  new owner takes possession
	        owners[buyer].URN = property;
// update property data
	        properties[property].owner = buyer;
	        properties[property].currentValue = price;
	        return true;
	    } else {
	        return false;
	    }
	}	 
	function Buy(string memory buyerH, string memory propertyH, uint price) public returns (bool success) {
	    bytes32 buyer = S2B(buyerH);
	    bytes32 property = S2B(propertyH);
        if (BuyB(buyer, property, price)) {
            return true;
        } else {
            return false;
        }
    }

// PROPERTY
// get functions

//    function listProperties() public returns (Property[]) {return propertylist;}
    
    function showPropertyB(bytes32 URN) internal view returns (string memory,uint) {
        return (properties[URN].propertyDescription, properties[URN].currentValue);
    }
    function showProperty(string memory RegNum) public view returns (string memory,uint) {
        return showPropertyB(S2B(RegNum));
    }
    
    function whoOwnsB(bytes32 URN) view internal returns (bytes32) {
        return (properties[URN].owner);
    }
    function whoOwns(string memory RegNum) public view returns (string memory) {
        return B2S(whoOwnsB(S2B(RegNum)));
    }
    
//    function showPropertyTypeB(bytes32 URN) internal view returns (string memory){
//        return (PropertyType[properties[URN].propType]);
//    } 
    
// PROPRIETOR 
// get functions

    function whoIsB(bytes32 user) internal view returns (string memory) {
        return (owners[user].Name);
    }
    function whoIs(string memory TaxID) public view returns (string memory) {
        return whoIsB(S2B(TaxID));
    }
    
    function ownsWhatB(bytes32 user) internal view returns (bytes32){
        return (owners[user].URN);
    }
    function ownsWhat(string memory TaxID) public view returns (string memory){
        return B2S(ownsWhatB(S2B(TaxID)));
    }
    
    function owesWhatB(bytes32 user) internal view returns (uint){
        return (owners[user].Tax);
    }
    function owesWhat(string memory TaxID) public view returns (uint){
        return (owesWhatB(S2B(TaxID)));
    }

//    function listTaxpayers() public pure returns (Owner[]) {return taxpayers;}  

//TAXATION 

	modifier TreasOnly () {
		require (msg.sender == treasurer);
		_;
	}
	
	function setupTaxSystem() public TreasOnly {
        for (uint8 j = 0; j < PropertyType; j++){
            setPropertyRate(j, 1);
            }
        setOwnerRate(0, 1);
        setOwnerRate(1, 1);
	}
	
    function setPropertyRate (uint8 T, uint8 R) public TreasOnly returns (bool) {
        if (T <= PropertyType && R <= TaxLimit) {
            PropRate[T]=R;
            return true;
        } else {
            return false;
        }
    }
    
    function setOwnerRate (uint8 T, uint8 R) public TreasOnly returns (bool) {
        if (T <= OwnerType && R <= TaxLimit) {
            OwnRate[T]=R;
            return true;
        } else {
            return false;
        }
    }
}