const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,    
    },
    email:{
        type:String,
        required:true,    
    },
    phone:{
        type:String,
        required:true,    
    },
    password:{
        type:String,
        required:true,    
    },
    isAsmin:{
        type:Boolean,
        default:false,
    },
});


userSchema.pre('save',async function (next) {
   // console.log("pre mrthod",this);
    const user = this ;

    if(!user.isModified('password')){
        next();
    }
    
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password,saltRound);
        user.password = hash_password;
    
    } catch (error) {
        next(error);
    }
})

userSchema.methods.comparePassword=async function(password){
    return  bcrypt.compare(password,this.password);
}

userSchema.methods.generateToken =async function(){
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAsmin,
        },
        process.env.JWT_KEY,
        {
            expiresIn:'30d',
        }

    );
    } catch (error) {
        console.error(error);
    }
};

const User = mongoose.model('User',userSchema);

module.exports = User;
