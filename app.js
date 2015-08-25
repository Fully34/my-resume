
//============================== requirements ==============================//
        
var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

//============================== template route ==============================//

  app.get('/templates/:templateName', function(req, res) {

    console.log(req.params)

    res.render('templates/' + req.params.templateName);
  });

//============================== routing ==============================//
        
app.get('/', indexController.index);

//============================== port ==============================//
        
var server = app.listen(9001, function() {
	console.log('Express server listening on port ' + server.address().port);
});
