const User = require("../models/user-model")
const bcrypt = require("bcryptjs");

const home = async(req,res)=>{
    try {
        
        req.status(200).json({ message : "gdsgefg"});

        console.log("fatch data");
    } catch (error) {
        console.log(error);
    }
};

const register = async(req,res)=>{
    try {
        const {username,email,phone,password} = req.body;

        const userExist = await User.findOne({email:email});

        if(userExist){
            return res.status(400).json({msg:"email exist"});
        }

        const saltRound = 10;
        const hash_password = await bcrypt.hash(password,saltRound);

       const userCreated = await User.create({
            username,
            email,
            phone,
            password,
        });

        res
        .status(200).json({
            message :"registration successful",
            token:await userCreated.generateToken(),
            userId:userCreated._id.toString(),
         });

    } catch (error) {
        console.log(error);
    }
};

//login

const login = async(req,res)=>{
    try {
       const {email,password}=req.body;
       const userExist = await User.findOne({email:email});
       console.log("finde");
       if(!userExist){
        return res.status(400).json({msg:"invalid data"});
       }
       const isMatch = await userExist.comparePassword(password);
       if(isMatch){
        res
        .status(200).json({
        message :"login successful",
        token : await userExist.generateToken(),
        userId:userExist._id.toString(),});
        console.log("ismatch");
       }else{
        res.status(400).json({msg:"invalid data"});
       }

    } catch (error) {
        console.log("error");
        console.log(error);
    }
};

module.exports={home,register,login};