const router = require('express').Router();
const users= require('../mock/users.json');

const hello={"text":"hello World"};
router.get('/hello',(req,res)=>{
    res.status(200).json(hello);
})

router.post('/authenticate',()=>{

});
router.get('/users',(req,res)=>{
    res.status(200).json(users)
})



module.exports = router;
