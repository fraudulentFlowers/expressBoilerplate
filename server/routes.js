import examplesRouter from './api/controllers/examples/router';
import shoesRouter from './api/controllers/shoes/router';
export default function routes(app) {
  app.use('/api/v1/examples',examplesRouter);
  app.use('/api/v1/shoes',shoesRouter);
};