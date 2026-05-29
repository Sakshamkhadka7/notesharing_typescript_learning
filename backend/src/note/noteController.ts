import envConfig from "../config/config.js";
import noteModel from "./noteModel.js";

const create = async(req: Request, res: Response) => {
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
       message:"Note Created",
       
     })
 } catch (error) {
    console.log(error);
    console.log("Error occured at note creation");
 }
};
