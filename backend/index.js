import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import {connect_db} from './src/db/index.database.js';
import { User } from './src/models/user.model.js';
// import { registerUser } from './src/controllers/user.controller.js';
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config({
    path:'./.env'
})
connect_db()
app.get('/',(req,resp)=>{
    resp.send("hello")
})
app.post('/user-registeration',async (req,res) =>{
    const {name,email,password} = req.body
    if([name,email,password].some((feild)=>feild?.trim()==="")){
        console.log("please enter all details");
    }
    const existedUser = await User.findOne({email});
    if(existedUser){
        console.log("email id is already registered");
    }
    const user = new User({
        name,
        email,
        password
    })
    let result = await user.save();
    return res.send(existedUser)
    .status(201)
    .json(`User is successefully registered ${result}`)
});


app.listen(process.env.PORT,()=>{
    console.log("listing on 5000 port");
})