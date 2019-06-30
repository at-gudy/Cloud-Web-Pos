import { createLogger, format, LoggerOptions, transports } from 'winston';
import { env, port } from '../app';

const options: LoggerOptions = {
  format: format.json(),
  level: env === 'production' ? 'info' : 'debug',
  transports: [
    new transports.File({ filename: 'log/debug.log', level: 'debug' }),
  ],
};

const logger = createLogger(options);

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.simple(),
  }));
  logger.debug('Logging initialized at debug level');
}

export default logger;
