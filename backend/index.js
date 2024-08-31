import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import {connect_db} from './src/db/index.database.js';
import UserRouter from './src/route/user.routes.js';
import productRouter from './src/route/product.routes.js';
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
app.use('/v1/user',UserRouter);
app.use('/v1/product',productRouter);

app.listen(process.env.PORT,()=>{
    console.log("listing on 5000 port");
})