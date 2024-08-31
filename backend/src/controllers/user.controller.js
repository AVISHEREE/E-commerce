import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if ([name, email, password].some((field) => field?.trim() === "")) {
    res.status(200).json({ error: "please enter all details" });
    return;
  }
  const existedUser = await User.findOne({ email });
  if (existedUser) {
    console.log("email id is already registered");
    // res.send("email id is already registered");
  }
  const user = new User({
    name,
    email,
    password,
  });
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  return res.status(402).json(result);
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if ([email, password].some((feild) => feild?.trim() === "")) {
    res.json("please enter all details");
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
  user = user.toObject();
  delete user.password;
  res.status(200).json(user);
};

export { registerUser, userLogin };
