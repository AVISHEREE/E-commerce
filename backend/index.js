import express from 'express'
const app = express();

app.get('/',(req,resp)=>{
    resp.send("hello")
})

app.listen(5000,()=>{
    console.log("listing on 5000 port");
})