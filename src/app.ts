/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, {
  Application,
  NextFunction,
  Request,
  Response,
  request,
  response,
} from 'express';
import userRouter from './app/modules/user/user.route';
import cors from 'cors';
// import ApiError from './errors/ApiError'
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application routes

app.use('/api/v1/users', userRouter);
app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);
// //testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   // next('ORE BABA ERROR')
// })
//Global error handler
app.use(globalErrorHandler);

export default app;
