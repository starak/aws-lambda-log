const levels = {
  error: 0,
  warn: 1,
  info: 2,
  verbose: 3,
  debug: 4,
  silly: 5
};

function getOutput(type){
  switch (type){
    case 'warn':
    case 'error':
      return process.stderr;
    default:
      return process.stdout;
  }
}

function write(type, msg, prefix, level){
  if(levels[type] <= level) {
    getOutput(type).write(`${type.toUpperCase()} RequestId: ${prefix} ${msg}\n`);
  }
}

class Logger{
  constructor(){
    this.level = process.env.LOG_LEVEL && levels[process.env.LOG_LEVEL] >= 0 ?
      levels[process.env.LOG_LEVEL] : levels.info;
  }
  get context(){
    return this._context
  }
  set context(context){
    return this._context = context;
  }
  get prefix(){
    return this.context ? this.context.awsRequestId : '';
  }
  info(msg){
    return write('info', msg, this.prefix, this.level);
  }
  debug(msg){
    return write('debug', msg, this.prefix, this.level);
  }
  warn(msg){
    return write('warn', msg, this.prefix, this.level);
  }
  error(msg){
    return write('error', msg, this.prefix, this.level);
  }
  silly(msg){
    return write('silly', msg, this.prefix, this.level);
  }

}

module.exports = new Logger();