// const Joi=require('joi');
// // const { schema } = require('../Models/userSchema');

// const signUpValidation=(req, res, next)=>{
    
//     const schema=Joi.object({
//         name:Joi.string().min(3).max(100).required(),
//         email:Joi.string().email().required(),
//         password:Joi.string().min(4).max(10).required()
//     });
//     console.log("Middlwware ", schema);
//     const {error}=schema.validate(req.body);
//     if(error){
//         return res.status(400).json({msg:"Bad request", error})
//     }
//     next();
// }
// const loginValidation=(req, res, next)=>{
//     const schema=Joi.object({
//         email:Joi.string().email().required(),
//         password:Joi.string().min(4).max(10).required()
//     });
//     const {error}=schema.validate(req.body);
//     if(error){
//         return res.status(400).json({msg:"Bad request", error})
//     }
//     next();
// }

// module.exports={
//     signUpValidation,
//     loginValidation,
// }
const Joi = require('joi');

const signUpValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(10).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ msg: "Bad request", error: error.details });
    }
    next();
}
const loginValidation=(req, res, next)=>{
    const schema=Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(4).max(10).required()
    });
    const {error}=schema.validate(req.body);
    if(error){
        return res.status(400).json({msg:"Bad request", error})
    }
    next();
}

module.exports = { signUpValidation, loginValidation };
