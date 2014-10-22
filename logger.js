var winston = require('winston');


winston.add(winston.transports.DailyRotateFile, { filename: './logs/development.log', json: false })

var log = function(level, title, message) {
  message = (message instanceof Array || typeof(message) === 'string') ? message : JSON.stringify(message)
  if (title) {
    message = title +': '+message;
  }

  winston.remove(winston.transports.DailyRotateFile);
  winston.add(winston.transports.DailyRotateFile, { filename: './logs/development_'+ level +'.log', json: false });
  
  winston.log(level, message);
}

module.exports = function() {
  return {
    info: function(message, title) {
      log('info', title, message)
    },
    error: function(message, title) {
      log('error', title, message)
    }
  }
}
