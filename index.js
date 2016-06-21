var express = require('express')
var mcapi = require('./node_modules/mailchimp-api/mailchimp')
var http = require('http')
var path = require('path')
var bodyParser = require('body-parser');
var app = express()

// set MailChimp API key here
mc = new mcapi.Mailchimp('114eb55870c1a2fbbbcb2d915490ef33-us13');

app.set('view engine', 'jade');
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

// parse application/json
app.use(bodyParser.json());                        
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.render('index', { title: 'Teach Yourself'});
});

app.post('/mailchimp-lists/:id/subscribe', function(req, res){
  mc.lists.subscribe({id: req.params.id, email:{email:req.body.email}}, function(data) {
      console.log('User subscribed successfully! Look for the confirmation email.');
      res.redirect('/');
    },
    function(error) {
      if (error.error) {
        console.log(error.code + ": " + error.error);
      } else {
        console.log('There was an error subscribing that user');
      }
      res.redirect('/');
    });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});