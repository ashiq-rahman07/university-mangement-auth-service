import express, { Application } from 'express';

import cors from 'cors';
// import ApiError from './errors/ApiError'
import globalErrorHandler from './app/middlewares/globalErrorHandler';

import router from './app/routes';
const app: Application = express();

app.use(cors());

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

export default app;
