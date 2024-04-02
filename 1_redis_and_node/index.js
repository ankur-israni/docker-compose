const express = require('express');
const redis = require('redis');
const process = require('process');

const nodeApp = express();
const redisDB = redis.createClient({
    host: 'redis-server',

    /* Redis server port in the container*/
    port: 6379,
});
redisDB.set('visits',0);

nodeApp.get('/',(req,res) => {
    redisDB.get('visits',(err,visits)=>{
        res.send('How many visits : '+visits);
        redisDB.set('visits',parseInt(visits)+1)
    });
});

nodeApp.listen(4001, () => {
    console.log('listening on internal port 4001, external port 3001');
  });