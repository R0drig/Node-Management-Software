const express = require('express')
const UserModel  = require('../models/user')
const router = express.Router()

router.post('/register',(req,res)=>{
    UserModel.findOne({email:req.body.email}).then((user)=>{
        if(user){
            res.status(400).json({email: "User already registered"})
        }
        else{
        const newUser =new UserModel({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
            
        })
        newUser.save()
        
        return res.status(200).json({menssage: "user created"})}})
});



module.exports = router