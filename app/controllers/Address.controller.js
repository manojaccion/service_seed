const router = require('express').Router();
let Address = require('../models/Address.model');
/**
 * Address Start
 */
router.get('/',(req,res)=>{
    Address.find({},function(err,result){
        if(err) throw err;
        console.log(result);
        res.status(200).json(result);
    });
});

router.get('/:id',(req,res)=>{
    Address.find({},function(err,result){
        if(err) {
            res.status(400).json(err);
        }else{
            console.log(result);
            res.status(200).json(result);
        }
    });
});
router.post('/',(req,res)=>{
    var addr = new Address(req.body);
    addr.save((err)=>{
        if(err){
            res.status(400).json(err);
        }else{
            res.status(200).json({data:req.body});
        }
    });
});

router.put('/:id',(req,res)=>{
    var addr = new Address(req.body);
    addr.save((err)=>{
        if(err){
            res.status(400).json(err);
        }else{
            res.status(200).json({data:req.body});
        }
    });
});

router.delete('/:id',(req,res)=>{
    res.status(200).json(req.body);
});

module.exports = router;