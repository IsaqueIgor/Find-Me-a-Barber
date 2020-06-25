import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import AppError from './errors/AppError';

const app = express();
app.use(express.json());

app.listen(3333, () => {
  console.log('🚀 Server launched!');
});
