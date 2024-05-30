const fs = require('fs');

function logReqResponse(filename) {
  return (req, res, next) => {
    const logEntry = `\n${new Date().toISOString()}: ${req.method}: ${req.path}\n`;
    fs.appendFile(filename, logEntry, (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
      }
      next();
    });
  };
}

module.exports = {
  logReqResponse,
};
