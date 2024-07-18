const {z, INVALID}= require("zod");




const singupSchema = z.object({
    username: z
    .string({required_error:"name is req"})
    .trim()
    .min(3,{message:"upto 3 chars"})
    .max(50,{message:"not be more then 50 chars"}),

    email: z
    .string({required_error:"name is req"})
    .trim()
    .email({message:"invalide email"})
    .min(3,{message:"upto 3 chars in email"})
    .max(50,{message:"not be more then 55 chars"}),

    phone: z
    .string({required_error:"name is req"})
    .trim()
    .min(10,{message:"min 10 number "})
    .max(12,{message:"not be more then 12 chars"}),

    password: z
    .string({required_error:"name is req"})
    .trim()
    .min(6,{message:"upto 6 chars"})
    .max(250,{message:"not be more then  250 chars"}),
});

module.exports=singupSchema;
