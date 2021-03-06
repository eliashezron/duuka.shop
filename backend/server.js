import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import ConnectDB from './config/db.js'
import UserRoutes from './Routes/UserRoutes.js'
import colors from 'colors'
import {notFound , errorHandler} from './Middleware/ErrorMiddleware.js'
import {rangeMiddleware} from './Middleware/RangeMiddleware.js'
import bodyParser from 'body-parser'

const __dirname = path.resolve(path.dirname(''))
dotenv.config({path: __dirname + '/.env'})

ConnectDB()
const app = express()
 app.use(cors())

//  app.use(bodyParser.json())

 app.use(express.json())

 if(process.env.NODE_ENV === 'development'){
     app.use(morgan('dev'))
 }
app.use(rangeMiddleware)
app.use('/users', UserRoutes)
app.use('/', (req, res)=> res.send('duuka.shop api is running'))

app.use(notFound)
app.use(errorHandler)


 const PORT = 5000;

 app.listen(PORT, console.log(`app is running in ${process.env.NODE_ENV} on ${PORT}`.yellow.bold))
