import dotenv from 'dotenv'
import express from 'express'
import {connect_db} from './src/db/index.database.js';
const app = express();
dotenv.config({
    path:'./env'
})
connect_db()
app.get('/',(req,resp)=>{
    resp.send("hello")
})

app.listen(process.env.PORT,()=>{
    console.log("listing on 5000 port");
})