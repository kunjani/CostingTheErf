pragma solidity ^0.5.2;

// GTRr - one owner owns one property

contract Register {

    string public district;
    address payable public registrar;

    constructor (string memory d) public payable {
        district = d;
        registrar = msg.sender;
    }

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
    function S2B(string memory source) pure internal returns (bytes32 result) {
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

    uint8 constant PropertyType = 6;
    uint8 constant Status = 4;
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
    function Build(string memory RegNum, string memory description, uint Ptype, uint newValue) public RegOnly returns (uint16) {
        bytes32 urn = S2B(RegNum);
        require (urn != 0x0);
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
            return uint16(inventory.length);
        } else {
            return 0;
        }
    }

    function kill() public {
        require (msg.sender == registrar);
        selfdestruct(registrar);
    }

// PROPERTY get functions
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
    function showCount() public view returns (uint16){
        return uint16(inventory.length);
    }
}