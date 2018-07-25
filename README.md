# aws-lambda-log

A clean and simple logger for lambda, with log level

### Install
    npm install aws-lambda-log --save

### Usage
```javascript
const logger = require('aws-lambda-log');

module.exports = (event, context) => {
  logger.context = context;
  ...
}
``` 

### Log Level

To set the log level use the environment variable `LOG_LEVEL` 
and set its value to [`error` | `warn` | `info` | `verbose` | `debug` | `silly`]. <br>
Default log level is `info`;