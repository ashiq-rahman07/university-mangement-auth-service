import express, { Application, Request, Response } from 'express'
import userRouter from './app/modules/users/users.route'
import cors from 'cors'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes

app.use('/api/v1/users', userRouter)
//testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working suceesfully')
})

export default app
