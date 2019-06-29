import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import hbs from 'hbs';
import path from 'path';
import * as homeController from './controllers/home';
import log from './util/logger';

// Load Environment Variables
dotenv.config({ path: '.env' });

// View Engine
const viewEngine = 'hbs';
// View Path
const viewsPath = path.join(__dirname, '../views');
// View Partial Path
const partialsPath = path.join(__dirname, '../views', './partials');
// Public Contents Path
const publicPath = path.join(__dirname, './public');

log.debug('View Engine : ' + viewEngine);
log.debug('View Path : ' + viewsPath);
log.debug('View Partials Path : ' + partialsPath);
log.debug('Public Directory Path : ' + publicPath);

const app = express();

hbs.registerPartials(partialsPath);

app.set('port', process.env.PORT || 3000);
app.set('view engine', viewEngine);
app.set('views', viewsPath);
app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', homeController.index);
app.get('/other', homeController.other);

export default app;
