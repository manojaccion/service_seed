const router = require('express').Router();
// const users= require('../mock/users.json');
// const userprofile= require('../mock/userprofile.json');
// const churchs= require('../mock/churchs.json');
// const churchprofile = require('../mock/churchprofile.json');
// const orders = require('../mock/orders.json');
// const order_itemlist = require('../mock/orderlist.json');
// const order_detail = require('../mock/orderdetail.json');
// const roles = require('../mock/roles.json');
// const donations = require('../mock/donations.json');
// const card = require('../mock/card.json');
 const article = require('../mock/articles.json');

const jwt = require('jsonwebtoken');

const hello={"text":"hello World"};

var Emma = require('emma-sdk');
var emma = new Emma({
    publicKey: "550cc5672bbabf203c16",
    privateKey: "550cc5672bbabf203c16",
    accountID: 1808546
  });


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
    
    
    
    res.status(200).json(req.body);
})

module.exports = router;
