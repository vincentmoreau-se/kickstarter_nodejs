const winston = require('winston');

module.exports = () => {
    winston.add(new winston.transports.File({
        filename: 'logs.log',
        level: 'info'
    }))

    winston.add(new winston.transports.File({
        filename: 'warn.log',
        level: 'warn'
    }))
}