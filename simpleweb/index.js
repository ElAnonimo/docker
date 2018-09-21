const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi there');
});

app.listen(8080, console.log('Docker app\'s listening on port 8080.'));
