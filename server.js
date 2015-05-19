var express = require('express');
var app = express();

app.use(express.static('./'));
app.get('/', function (req, res) {
  res.redirect('./index.html');
});

var server = app.listen(3000, function () {
  console.log('Server listening at http://localhost:3000');
});