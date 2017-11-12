const restify = require('restify'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    corsMiddleware = require('restify-cors-middleware'),
    Router = require('restify-router').Router;
    rootRouter = new Router();


// Routes
const movieRouter = require('./routes/movie');

//End Routes

//Server Setup
const server = restify.createServer({ name: 'movieify', version: '0.0.1' });
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser()); //Query parser for payload
server.use(restify.plugins.bodyParser()); //Body parser to get payload
server.use(morgan('tiny')); //Initialise morgan logger on 'dev' preset
//Server Setup End


// const cors = corsMiddleware({ //CORS setup
//   preflightMaxAge: 5, //Optional
//   origins: ['*'],
//   allowHeaders: ['Authorization', 'Access-Control-Allow-Origin'],
//   exposeHeaders: ['API-Token-Expiry']
// })
//
// server.pre(cors.preflight);
// server.use(cors.actual);

rootRouter.get('/', function (req, res, next) {
  res.json(200, {message:"Connected"});
});

rootRouter.get('/movie', function (req, res, next) {
  res.json(200, {message:"Movie route is set up!"});
});

rootRouter.applyRoutes(server);
movieRouter.applyRoutes(server, '/movie');

server.listen(5000, function() {

  mongoose.connect('mongodb://localhost/movies');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Error:')); //On error
  db.once('open', function() { console.log("Connected");

  console.log('%s listening at %s', server.name, server.url); });
});

module.exports.server = server;
