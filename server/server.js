import app from './api/index';
import logger from './api/logger';
import { SERVER_PORT } from './config';

app.listen(SERVER_PORT, (error) => {
  if (error) {
    logger.error('Cannot start backend services:');
    logger.error(error);
  } else {
    logger.info(`Backend service is running on port: ${SERVER_PORT}${process.env.NODE_APP_INSTANCE ? ` on core ${process.env.NODE_APP_INSTANCE}` : ''}!`);
    logger.info(`API docs: http://localhost:${SERVER_PORT}/v1/api-docs`);
  }
});

export default app;
