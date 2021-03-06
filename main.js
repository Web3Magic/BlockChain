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
    //creating a Nonce Property so we dont incurre a endless loop
    this.nonce = 0;
  }
  // method to handle hash, takes the properties from class block and hashes them in SHA256 from crypto.js library. 
  calculateHash(){
    return SHA256(this.index + 
      this.previousHash + 
      this.timestamp + 
      JSON.stringify(this.data) + 
      this.nonce
      ).toString();
  }

  // method to make spaming the blockchain harder by adding difficulty the hash to have length of 0's added
  mineBlock(difficulty){
    while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log("block Mined: " + this.hash);
  }
}
// Constructor will initialize the chain but there needs to be a first block on the chain. 
class Blockchain{
  constructor(){
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 5;
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
    //newBlock.hash = newBlock.calculateHash();
    newBlock.mineBlock(this.difficulty);
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

let roxyCoin = new Blockchain();
roxyCoin.addBlock(new Block(1, "01/01/2022", {amount: 4}));
roxyCoin.addBlock(new Block(2, "01/02/2022", {amount: 10}));
roxyCoin.addBlock(new Block(3, "01/02/2022", {amount: 110}));

//console.log(JSON.stringify(roxyCoin, null, 4));

// Check if chain is valid (will return true)
//console.log('Blockchain valid? ' + roxyCoin.isChainValid());

// Let's now manipulate the data
//roxyCoin.chain[1].data = { amount: 14 };

// Check our chain again (will now return false)
//console.log("Blockchain valid? " + roxyCoin.isChainValid());

console.log('mining block 1...');
roxyCoin.addBlock(new Block(1,"01/01/2022", {amount: 4}));
console.log('mining block 2...');
roxyCoin.addBlock(new Block(2, "01/02/2022", {amount: 10}));
