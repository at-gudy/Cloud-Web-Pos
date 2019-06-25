import dotenv from 'dotenv';
import express from 'express';
import logger from './util/logger';

dotenv.config({path: '.env'});
const app = express();

app.set('port', process.env.PORT || 3000);

export default app;
