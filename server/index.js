import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import taskRouter from "./routes/taskRoutes.js"
import cors from "cors"

const app = express();
app.use(bodyParser.json())
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 5000
const MONGOURL = process.env.MONGOURL

app.use("/app",taskRouter);

mongoose.connect(MONGOURL)
        .then(()=>{
            console.log("Mongo DB Connected")
            app.listen(PORT, ()=>{
                console.log("Server listening at PORT:",PORT);
            })
        })
        .catch((error)=>{
            console.log(error)
        })