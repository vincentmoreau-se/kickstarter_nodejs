require('dotenv').config();
var access_log= require('./config/access-log-app');
var express = require('express');
var helmet = require('helmet');
const rateLimit = require("express-rate-limit");
var compression = require('compression');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');

var port = 8080;
var app = express();

if (process.env.NODE_ENV === "production") {
    console.log('production environnement');
    app.use(helmet());      // Protect from well-known web vulnerabilities
    app.use(compression()); // Compress all routes
    app.set('trust proxy', '127.0.0.1');

    const limiter = rateLimit({
        max: 10000,                 // 10000 times max call by the same service
        windowMs: 60 * 60 * 1000,   // hour (1h) by user
        message: 'You have exceeded the maximum number of requests allowed.'
    });
    app.use(limiter);
    
} else {
    console.log('development environnement');
    app.use(logger('dev')); // Use morgan logger
    app.use(cors());        // Enable Cross Origin Request
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json({limit:'2000kb'})); // limit data size up to 2mb, avoid DDOS attack
app.use('/', express.static('./images/')) ; // serve static files

require('./app/routes')(app);

app.listen(port,access_log.log(port)); // Start sever