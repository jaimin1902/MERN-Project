const Contact = require("../models/contact-model");
const User = require("../models/user-model");




const contactForm = async(req,res) =>{
    try {
        const response = req.body;
        //email through

        // const {email}=req.body;
        // const userExist = await User.findOne({email:email});
        // console.log("finde");
        // console.log("create");
        await Contact.create(response);
        return res.status(200).json({message:"message send successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"something went wrong"});
    }
};

module.exports=contactForm;