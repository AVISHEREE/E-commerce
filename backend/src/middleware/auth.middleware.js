import jwt from 'jsonwebtoken'
const verifyJwt = (req,res,next) =>{
    const token = req.headers['authorization'];
    if(token){
        jwt.verify(token,process.env.jwtKey,(err,valid)=>{
            if(err){
                res.send({error:"please give valid token"})
            }
            else{
                next();
            }
        });
    }
    else{
        res.send({error:"please add token with headers"});
    }
}

export default verifyJwt;