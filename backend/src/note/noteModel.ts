import mongoose from "mongoose";
import type { Note } from "./noteTypes.js";

const noteSchema = new mongoose.Schema<Note>(
  {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Descriptions must be provided"],
    },
    file: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<Note>("Note", noteSchema);
