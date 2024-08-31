import mongoose,{Schema} from "mongoose";

const ProductSchema = new Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    price:{
        type:Number,
        require:true
    },
    category:{
        type:String
    },
    company:{
        type:String
    },
    userID:{
        type:Schema.Types.ObjectId,
        ref:"User",
        require:true
    }
})

export const Product = mongoose.model("product",ProductSchema);