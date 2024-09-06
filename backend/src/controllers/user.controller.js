import { User } from "../models/user.model.js";
import jwt from 'jsonwebtoken'
const jwtKey = "AVISHERE";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if ([name, email, password].some((field) => field?.trim() === "")) {
    res.status(200).json({ error: "please enter all details" });
    return;
  }
  // const existedUser = await User.findOne({ email });
  // if (existedUser) {
  //   console.log("email id is already registered");
  //   // res.send("email id is already registered");
  // }
  const userDetails = new User({
    name,
    email,
    password,
  });
  let user = await userDetails.save();
  user = user.toObject();
  delete user.password;
  jwt.sign({userDetails},jwtKey,{expiresIn:"2h"},(err,token)=>{
    if(err){
      res.send({error:"Error in Jwt Token"})
    }
    res.send({user,auth:token});
  })
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if ([email, password].some((feild) => feild?.trim() === "")) {
    res.json({error:"please enter all details"});
    return;
  }
  let user = await User.findOne({ email });
  if (!user) {
    res.json({error:"user isn't registered"});
    return;
  }
  if (password !== user.password) {
    res.json({error:"password is not correct"});
    return;
  }
    jwt.sign({user},jwtKey,{expiresIn:"2h"},(err,token)=>{
      if(err){
        res.send("Error in Jwt Token")
      }
      user = user.toObject();
      delete user.password;
      res.send({user,auth:token});
    })
};

export { registerUser, userLogin };
