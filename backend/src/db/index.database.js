import mongoose from "mongoose";
const URL = "mongodb+srv://akash12:akash12@cluster0.quwm7qi.mongodb.net/E-commerce"
const connect_db = async () =>{
   try {
     const connectionStr = await mongoose.connect(`${URL}`);
     console.log(`Db connected ${connectionStr.connection.host}`);
   } catch (error) {
     console.log("DB connection error ",error);
   }
    
}

export {connect_db}