var http = require('http'),
    express = require('express'),
    path = require('path'),
    logger = require('./logger')();

    var app = express();
    app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade');
    app.use(express.bodyParser());
    var server = http.createServer(app);
 
server.listen(3000);
debugger;
try{
    logger.info("Express server listening on port 3000");
    asdad("sds");
}
catch(err){
    logger.error(err.stack)
}


app.use(express.static(path.join(__dirname, 'public')));
 
app.get('/', function (req, res) {
  res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.get('/getUser', function(req, res){
	return res.send("testUser");
});
