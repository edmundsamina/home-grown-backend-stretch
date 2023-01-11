import express from 'express'
import { router } from './routers/index.js'
import cors from 'cors'


const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/homegrown", router);



export default app
