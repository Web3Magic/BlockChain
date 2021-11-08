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

