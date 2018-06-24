const router = require('express').Router();
const article = require('../mock/articles.json');
 const mongoose = require('mongoose');
 var promise = mongoose.connect('mongodb://localhost/awana', {useMongoClient: true});
 const bluebird = require('bluebird');
 mongoose.Promise = bluebird;

const jwt = require('jsonwebtoken');

const hello={"text":"hello World"};

/** Controllers */

const addressController = require('../controllers/Address.controller');
const cardController = require('../controllers/Card.controller');
const orderController = require('../controllers/Order.controller');
const churchController = require('../controllers/Church.controller');
const userController = require('../controllers/User.controller');

router.get('/',(req,res)=>{
    let routeData=[];
    router.stack.forEach(element => {
        let obj={};
        // obj.path=element.route.path;
        // obj.method=element.route.stack[0].method;
        routeData.push(obj);
    });
    //routeData.push(router.stack);
    res.status(200).json(router.stack);
});

router.get('/hello',(req,res)=>{
    res.status(200).json(hello);
});

router.use('/user',userController);
router.use('/order',orderController);
router.use('/card',cardController);
router.use('/address',addressController);

router.get('/churchs',(req,res)=>{
    res.status(200).json(churchs);
});

router.get('/churchs/:id',(req,res)=>{
    res.status(200).json(churchprofile);
});

router.get('/donations',(req,res)=>{
    res.status(200).json(donations);
});

router.get('/articles',(req,res)=>{
    res.status(200).json(article);
});
router.post('/newssignup',(req,res)=>{
    // emma api need to implement
    emma.member.signup(req.body,(error,result)=>{
        console.log(error);
        if(result){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    });
})

module.exports = router;
