const express = require('express');
const app = express();
const PORT = 3000;
const { BlockChain, Block } = require('./server/block-chain');

app.get('/', (req, res) => res.send('You are on the root route :D'));

app.get('/blockchain', (req, res) => {
  let mohaCoin = new BlockChain();
  res.send(mohaCoin.getBlockChain());

});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));