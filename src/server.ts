import app from './app';
import logger from './util/logger';

const server = app.listen(app.get('port'), () => {
// tslint:disable-next-line: no-console
  logger.debug('server started port : ' + process.env.PORT);
  logger.debug('hello');
});

export default server;
