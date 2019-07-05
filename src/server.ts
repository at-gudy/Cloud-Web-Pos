import { app, env, port } from "./app";
import logger from "./util/logger";

const server = app.listen(port, () => {
  logger.debug("Server Environment : " + env);
  logger.debug("Server Port : " + port);
});

export default server;
