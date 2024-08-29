import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        require:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        require:true,
        trim:true,
        index:true
    },
    password:{
        type:String,
        require:true,
        require:true,
        trim:true,
        index:true
    }
})

export const User = mongoose.model('User',userSchema);