const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379    // default port to connect to Redis
});
client.set('visits', 0);

app.get('/', (req, res) => {
  process.exit(1);    // to manually 'crash' the app
  client.get('visits', (err, visits) => {
    res.send('Number of visits: ' + visits);    // visits is sent back from redis as string
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, console.log('Visits app is listening on port 8081.'));
