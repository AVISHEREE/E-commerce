import { User } from "../models/user.model.js";

const registerUser = async (req,res) =>{
    const {name,email,password} = req.body
    if([name,email,password].some((feild)=>feild?.trim()==="")){
        console.log("please enter all details");
    }
    const existedUser = User.findOne({
        $or:[{email}]
    });
    if(existedUser){
        console.log("email id is already registered");
    }
    const user = User.insertMany({
        name,
        email,
        password
    })
    return res
    .satus(201)
    .json("User is successefully registered",user)
}

const userLogin = async (req,res) =>{
    const {email,password} = req.body
    if([email,password].some((feild)=>feild?.trim()==="")){
        res
        .json("please enter all details")
        return;
    }
    const user = User.findOne({email})
    if(!user){
        res.json("user isnt registered available")
        return;
    }
    if(password!=user.password){
        res.json("password is not correct")
        return;
    }
    res
    .satus(200)
    .json(`login successfully ${user}`)
}

export {
    registerUser,
    userLogin
}