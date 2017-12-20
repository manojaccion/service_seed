const userRouter = require('express').Router();
let userModel = require('../models/User.model');

userRouter.post('/signupnews',(req,res)=>{
    res.status(200).json(req.body);
})

userRouter.post('/signup',(req,res)=>{

    res.status(200).json(req.body);
});

userRouter.post('/authenticate',(req,res)=>{
    res.status(200).json(req.body);
});

userRouter.get('/logout',(req,res)=>{
    
});

userRouter.get('/users',(req,res)=>{
    res.status(200).json(users)
});

userRouter.get('/users/:id',(req,res)=>{
    res.status(200).json(userprofile)
});

userRouter.get('/roles',(req,res)=>{
    res.status(200).json(roles);
});


module.exports = userRouter;