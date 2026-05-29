import express from "express"
import globalErrorHandler from "./middleware/globalErrorHandler.js"
import noteRoute from "./note/noteRoute.js"
import cors from "cors"
import envConfig from "./config/config.js"

const app=express()

app.use(express.json());

app.use(cors({
    origin:envConfig.frontendUrl
}))

app.use("/api/notes",noteRoute)
app.use(express.static("./src/uploads/"))
app.use(globalErrorHandler)

export default app