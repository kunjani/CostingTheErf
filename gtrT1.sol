pragma solidity ^0.5.2;

// GTRT - one owner owns one property

contract TaxEnrol {

    address payable public registrar;

    constructor () public payable {
        registrar = msg.sender;
    }
    
// Settings

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

// Define Proprietor data structure. Key field is TaxpayerID

    uint8 constant OwnerType = 4;
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
        
    function Apply(string memory TaxID, string memory Name, uint OType) public returns (uint16) {
        bytes32 TID = S2B(TaxID);
        require (TID != 0x0);
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
            return uint16(taxpayers.length);
        } else {
            return 0;
        }
    }
    
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
    function showCount() public view returns (uint16){
        return uint16(taxpayers.length);
    }
}
//    function owesWhatB(bytes32 user) internal view returns (uint){
//        return (owners[user].Tax);
//    }
//    function owesWhat(string memory TaxID) public view returns (uint){
//        return (owesWhatB(S2B(TaxID)));
//    }

//    function listTaxpayers() public pure returns (Owner[]) {return taxpayers;}  

