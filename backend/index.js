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
    if([name,email,password].some((field)=>field?.trim()==="")){
        res
        .status(200)
        .json({error:"please enter all details"});
        return;
    }
    const existedUser = await User.findOne({email});
    if(existedUser){
        console.log("email id is already registered");
        // res.send("email id is already registered");
    }
    const user = new User({
        name,
        email,
        password
    })
    let result = await user.save();
    result = result.toObject()
    delete result.password
    return res
    .status(402)
    .json(result)
});

app.post('/login',async (req,res) =>{
    const {email,password} = req.body
    if([email,password].some((feild)=>feild?.trim()==="")){
        res
        .json("please enter all details")
        return;
    }
    let user = await User.findOne({email})
    if(!user){
        res.json("user isn't registered");
        return;
    }
    if(password!==user.password){
        res.json("password is not correct")
        return;
    }
    user = user.toObject()
    delete user.password
    res
    .status(200)
    .json(user)
})


app.listen(process.env.PORT,()=>{
    console.log("listing on 5000 port");
})