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
    this.chain = [this.createGenesisBlock()];
  }
  //Need a method to create the first block the Genisis Block as it is called.
  createGenesisBlock(){
    return new Block(0, "11/08/2021", "0");
  }
  //Medthod to the last block in the chain
  getLatestBlock(){
  return this.chain[this.chain.length - 1];
  }
  //Method to add a new block to the chain
  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
  //Method to check to see if the block is valid on the blockchain
  isChainValid(){
    for (let i= 1; i < this.chain.length; i++){
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i -1];

      if (currentBlock.hash !== currentBlock.calculateHash()){
        return false;      
      }

      if (currentBlock.previousHash !== previousBlock.hash){
        return false;
      }
    }
    return true;
  }
}