//Requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//route and module variables
var index = require('./routes/index.js');
var db = require('./modules/db.js');

//port
app.set('port', (process.env.PORT || 4000));

//uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//routes
app.use('/', index);

//port listen
app.listen(app.get('port'), function(){
  console.log('listening on port: ', app.get('port'));
});

//exports
module.exports = app;
