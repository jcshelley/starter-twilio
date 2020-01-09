var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! from My Node Starter App!');
});

app.listen(3000, function () {
  console.log('StarterApp listening on port 3000!');
});
