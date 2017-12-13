const router = require('express').Router();

const hello={"text":"hello World"};
router.get('/hello',(req,res)=>{
    res.status(200).json(hello);
})

router.post('/authenticate',()=>{

});
module.exports = router;
