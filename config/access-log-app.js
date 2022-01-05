const winston = require('winston');

// Logs with winston
require('./logging')();

module.exports = {
    log: function(port){
        console.log('NodeJS kickstarter start on port ' + port);
        const date = new Date();
        winston.info(`Listening on port ${port} - ${date.getDay()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    }
}