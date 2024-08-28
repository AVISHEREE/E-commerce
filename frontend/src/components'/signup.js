import React,{useState} from "react";

const SignUp = () =>{
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
     function show(){
        console.log(name,password,email);
     }
    return(
        <>
        <div className="body">
        <h1>Register yourself</h1>
        <input className="inputBox" type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" />
        <input className="inputBox" type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" />
        <input className="inputBox" type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" />
        <button className="signUpBtn" onClick={show}>Sign Up</button>
        </div>
        </>
    )
}



export default SignUp;