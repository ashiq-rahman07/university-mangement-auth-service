import express, { Application, Response, Request, NextFunction } from 'express';
import httpStatus from 'http-status';
import cors from 'cors';
// import ApiError from './errors/ApiError'
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import cookieParser from 'cookie-parser';

import router from './app/routes';
const app: Application = express();

app.use(cors());
app.use(cookieParser());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application routes

app.use('/api/v1/', router);

// //testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   // next('ORE BABA ERROR')
// })

//Global error handler
app.use(globalErrorHandler);

//Handle not found

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessage: [
      {
        path: '.',
        message: 'API Not Found',
      },
    ],
  });

  next();
});

export default app;
