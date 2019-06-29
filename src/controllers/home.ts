import { Request, Response } from 'express';
import log from '../util/logger';

export const index = (
  req: Request,
  res: Response,
) => {
  log.debug('index');
  res.render('index');
};

export const other = (
  req: Request,
  res: Response,
) => {
  log.debug('other');
};
