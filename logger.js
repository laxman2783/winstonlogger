'use strict';

const { createLogger, format, transports } = require('winston');

const Fs = require('fs');

const { combine, timestamp, printf } = format;
const logDir = './logs';

if (!Fs.existsSync(logDir)) {
    Fs.mkdirSync(logDir);
}

const s2Format = printf((info) => {
    const requestId = (info.ctx && info.ctx.requestId) ? info.ctx.requestId : (info.ctx ? info.ctx : 'unknown');
    return `${info.timestamp} [${requestId}] ${info.level}: ${info.message}`;
});

const logger = createLogger({
    format: combine(
        timestamp(),
        s2Format
    ),
    transports: [
        new transports.File({
            name: 'debug',
            level: 'debug',
            filename: './logs/s2-mdm-services-debug.log',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 50,
            tailable: true,
            colorize: false
        }),
        new transports.File({
            name: 'info',
            level: 'info',
            filename: './logs/s2-mdm-services-info.log',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 50,
            tailable: true,
            colorize: false
        }),
        new transports.File({
            name: 'error',
            level: 'error',
            filename: './logs/s2-mdm-services-error.log',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 50,
            tailable: true,
            colorize: false
        }),
        new transports.File({
            name: 'warn',
            level: 'warn',
            filename: './logs/s2-mdm-services-warn.log',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 50,
            tailable: true,
            colorize: false
        })
    ]
});

module.exports = logger;
