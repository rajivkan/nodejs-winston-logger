var http = require('http'),
    express = require('express'),
    path = require('path'),
    logger = require('./logger')();

    var app = express();
    app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade');
    app.use(express.bodyParser()); // <-- add
    var server = http.createServer(app);
 
server.listen(3000);

logger.info("Express server listening on port 3000");
logger.error('This is test error log', "app.js")

app.use(express.static(path.join(__dirname, 'public')));
 
app.get('/', function (req, res) {
  res.send('<html><body><h1>Hello World</h1></body></html>');
});
