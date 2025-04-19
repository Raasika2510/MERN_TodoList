import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    task: {type:String, required: true},
    date: {type: Date, required: true},
    category: {type: String, required: true}
})

export const userModel = mongoose.model ("Tasks",userSchema)
