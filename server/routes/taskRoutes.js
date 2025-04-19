import express from "express"
import { deleteTask, getTaskById, getTasks, insertData, updateTask } from "../controller/taskControllers.js";
const route = express.Router();

route.post("/createtask",insertData);
route.get("/gettask", getTasks);
route.get("/gettask/:id",getTaskById);
route.put("/updatetask/:id", updateTask);
route.delete("/deletetask/:id",deleteTask);

export default route;