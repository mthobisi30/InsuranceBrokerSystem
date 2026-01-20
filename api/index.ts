import { app, initServer } from '../server/index';

let isInitialized = false;

export default async (req: any, res: any) => {
  if (!isInitialized) {
    await initServer();
    isInitialized = true;
  }
  return app(req, res);
};
