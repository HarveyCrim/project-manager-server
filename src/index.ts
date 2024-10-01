import express, {Request, Response} from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import projectRouter from "./routes/projectRoutes"
import taskRouter from "./routes/taskRoutes"
import router from "./routes/projectRoutes"
//config
dotenv.config()
const app = express()
app.use(cors())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


//routes
const port = process.env.PORT
app.use('/projects', projectRouter)
app.use('/tasks', taskRouter)
app.listen(port, () => {
    console.log(`server is running at ${port}`)
})

