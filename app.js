import express from 'express'
import { router } from './routers/index.js'
import cors from 'cors'
import decodeToken from './middleware/index.js'
import { publicrouter } from './routers/public.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/homegrown/public/", publicrouter);
app.use(decodeToken)
app.use("/api/homegrown/", router);



export default app
