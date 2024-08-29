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

export {registerUser}