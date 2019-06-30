import app from './app';
import logger from './util/logger';

const server = app.listen(app.get('port'), () => {
  logger.debug('Server Environment : ' + process.env.NODE_ENV);
  logger.debug('Server Port : ' + process.env.PORT);
});

export default server;
