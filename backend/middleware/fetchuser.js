const jwt=require("jsonwebtoken")

const jwt_secret = "yaha_pe_signature";//use .env file

const fetchuser=(req,res,next)=>{
    //get user from the jwt token and add id to req object
    const token=req.header("auth-token");
    if(!token){
         res.status(401).send({error:"token unavillable"})
    }
    try {
        const data=jwt.verify(token,jwt_secret);//here the token is verified 
    req.user=data.user;
    next();//call the next function in router after this function 
    } catch (error) {
        console.error(error)
     res.status(401).send({error:"invalid token"})
    }
    
}

module.exports=fetchuser;