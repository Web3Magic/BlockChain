# BlockChain

This is a test build for a javascript based Blockchain. 
The goal is to establish a workflow on github.
Add new features often to the blockchain application

Dependencies identified:
Crypto.js - has SHA256 Hash methods. 

Start by requiring Cyrpto-js library,
Each block has a index so we know where it sits on the block chain. 
Time stamp is required for knowing when a transaction happened. (but can be tampered with apprently)
Data is where we will store the transactions information
Lastly the interesting part of blockchains is the hash of the previous block.

-
Next lets chain them...with a class of Blockchain,
We need a first block on the chain so thats called the genesis block..
then we need to methods for the block chain like add a new block.
we will need a method to get the last block in the chain, then we need to check if the chain is not tampered with. it loops over the blocks and sees if the has of each block is correct. it checks if each block points to the correct previous block by compairing the previous hash,. if it works it returns true, if something is off it returns false. 

Adding proof of work.
Reading about hwo bitcoin creates mining difficulty we will need a Nonce value. 
so in our block lets add the var nonce to the constructor and initilize its value to 0.

also we will need a method that will increment the nonce value until we get the valid hash. Since its by difficulty we need the difficulty to be a parameter. 

changed the calculateHash() becuase it does not use the nonce var to calculate the hash. 

Now that the block has a nonce and can be mined, we need to ensure that the blockchain will behave correctly by adding a property to track the difficulty. 

I couldnt tell if it was working when i placed it at 2, so i put it at 6 and was still unsure because it was taking too long? (which is a good thing) I set it to 4 and it seems to have the right behavior as i can see that it takes time to mine the block. 

now we need to actually mine the block and then add it to the change...Made some alteration to the method addblock
