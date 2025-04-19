import { userModel } from "../models/userModels.js";

export const insertData = async(req, res) => {
    try{
        const newTask = new userModel(req.body);
        const {task} = newTask;
        const exists = await userModel.findOne({task:task});
        if(exists){
            return res.status(500).json({Message: "Task already found"});
        }
        const saved = await newTask.save();
        res.status(200).json(saved)
    }catch(error){
        res.status(404).json({ErrorMsg: error.message})
    }
}

export const getTasks = async(req,res) => {
    try{
        const tasks = await userModel.find();
        if(tasks.length === 0 || !tasks){
            return res.status(500).json({Message: "No tasks found"})
        }
        res.status(200).json(tasks);
    }catch(error){
        res.status(404).json({errorMsg: error.message})
    }
}

export const getTaskById = async(req,res) => {
    try{
        const id = req.params.id;
        const data = await userModel.findById(id)
        if(!data){
            return res.status(500).json({Message: "Task already found"});
        }
        res.status(200).json(data);
    }catch(error){
        res.status(404).json({errorMsg: error.message})
    }
}

export const updateTask = async(req,res) => {
    try{
        const id = req.params.id;
        const data = await userModel.findById(id)
        if(!data){
            return res.status(500).json({Message: "Task already found"});
        }
        const updated = await userModel.findByIdAndUpdate(id, req.body, {new:true})
        res.status(200).json(updated)
    }catch(error){
        res.status(404).json({errorMsg: error.message})
    }
}

export const deleteTask = async(req,res) => {
    try{
        const id = req.params.id;
        const data = await userModel.findById(id)
        if(!data){
            return res.status(500).json({Message: "Task already found"});
        }
        const result = await userModel.findByIdAndDelete(id)
        res.status(200).json(result)
    }catch(error){
        res.status(404).json({errorMsg: error.message})
    }
}