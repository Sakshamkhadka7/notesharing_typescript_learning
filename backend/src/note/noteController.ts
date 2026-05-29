import type { NextFunction, Request, Response } from "express";
import envConfig from "../config/config.js";
import noteModel from "./noteModel.js";
import createHttpError from "http-errors";

export const createNote = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const file = req.file
      ? `${envConfig.backendURL}/${req.file.filename}`
      : "https://static.vecteezy.com/system/resources/previews/055/649/528/non_2x/crying-emoji-with-tears-streaming-down-face-expressing-sadness-or-distress-vector.jpg";
    const { title, description, subTitle } = req.body;
    if (!title || !description || !subTitle) {
      res.status(400).json({
        message: "Please provide a title,description,subTitle",
      });

      return;
    }

    await noteModel.create({
      title,
      subTitle,
      description,
      file,
    });

    res.status(201).json({
      message: "Note Created",
    });
  } catch (error) {
    console.log(error);
    console.log("Error occured at note creation");
    next(createHttpError(500, "Error while creating note"));
  }
};

export const listNotes = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const notes = await noteModel.find();
    res.status(200).json({
      message: "Notes fetched",
      data: notes,
    });
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "Error while fetching error"));
  }
};

export const deleteNote = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {id}=req.params
    const notes = await noteModel.findByIdAndDelete(id)
    if(notes){
      return next(createHttpError(404,"Note not found with that ID"))
    }
    res.status(200).json({
      message: "Notes deleted"
    });
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "Error while deleting error"));
  }
};
