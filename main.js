const SHA256 = require('crypto-js/sha256');

// could store currency data in the data parameter
class Block{
  constructor(index, timestamp, data, previousHash = ""){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    //adding property hash, to handle the method of converting to hash256
    this.hash = this.calculateHash();
  }
  // method to handle hash, takes the properties from class block and hashes them in SHA256 from crypto.js library. 
  calculateHash(){
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}
// Constructor will initialize the chain but there needs to be a first block on the chain. 
class Blockchain{
  constructor(){

  }
  //beed a method to create the first block the Genisis Block as it is called.
}