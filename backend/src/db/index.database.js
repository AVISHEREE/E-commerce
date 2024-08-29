import mongoose from "mongoose";
const connect_db = async () =>{
   try {
     const connectionStr = await mongoose.connect(`${process.env.MONGODB_URI}`);
     console.log(`Db connected ${connectionStr.connection.name}`);
   } catch (error) {
     console.log("DB connection error ",error);
   }
    
}

export {connect_db}