var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config');
var stripe = require("stripe")(config.secret);

app.use(express.static('./'));
app.get('/', function (req, res) {
  res.redirect('./index.html');
});


//Charge Customer Card Immediately 
app.use('/complete_transaction', bodyParser(), function(req, res){

//Tokenized info
var stripeToken = req.body.stripeToken;

	var charge = stripe.charges.create({
	  amount: 1000, // amount in cents, again
	  currency: "usd",
	  source: stripeToken,
	  description: "Example charge"
	}, function(err, charge) {
	  if (err && err.type === 'StripeCardError') {
	    // The card has been declined
	    res.json({"status":"401 Card Declined"});
	  } else {
	  	res.json({"status":"200 OK"});
	  }
	});
});

var server = app.listen(7000, function () {
  console.log('Server listening at http://localhost:3000');
});