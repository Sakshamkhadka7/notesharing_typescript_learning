import express from "express"
import { createNote } from "./noteController.js"

const noteRoute=express.Router()
import {multer,storage} from "./../middleware/multerMiddleware.js"

const upload=multer({storage:storage})

noteRoute.route("/").post(upload.single("file"),createNote)

export default noteRoute