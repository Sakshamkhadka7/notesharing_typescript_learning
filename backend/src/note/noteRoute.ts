import express from "express"
import { createNote, deleteNote, listNotes } from "./noteController.js"

const noteRoute=express.Router()
import {multer,storage} from "./../middleware/multerMiddleware.js"

const upload=multer({storage:storage})

noteRoute.route("/").post(upload.single("file"),createNote)
noteRoute.route("/getNote").get(listNotes)
noteRoute.route("/deleteNote/:id").delete(deleteNote)

export default noteRoute