const logger = require(".");

logger.context = {awsRequestId:'afaawefawef'};

logger.info('Hepp');
logger.debug('Hopp');
logger.warn('Hopp');
logger.error('Hopp');
logger.silly('Hopp');