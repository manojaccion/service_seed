const router = require('express').Router();
const users= require('../mock/users.json');
const userprofile= require('../mock/userprofile.json');
const churchs= require('../mock/churchs.json');
const churchprofile = require('../mock/churchprofile.json');

const orders = require('../mock/orders.json');
const order_itemlist = require('../mock/orderlist.json');
const order_detail = require('../mock/orderdetail.json');

const roles = require('../mock/roles.json');
const donations = require('../mock/donations.json');

const address = require('../mock/address.json');
const card = require('../mock/card.json');

const article = require('../mock/articles.json');

const jwt = require('jsonwebtoken');

const hello={"text":"hello World"};

router.get('/',(req,res)=>{
    let routeData=[];
    
    router.stack.forEach(element => {
        let obj={};
        obj.path=element.route.path;
        obj.method=element.route.stack[0].method;
        routeData.push(obj);
    });
    //routeData.push(router.stack);
    res.status(200).json(routeData);
});

router.get('/hello',(req,res)=>{
    res.status(200).json(hello);
});

router.post('/signupnews',(req,res)=>{
    res.status(200).json(req.body);
})

router.post('/signup',(req,res)=>{

    res.status(200).json(req.body);
});

router.post('/authenticate',(req,res)=>{
    res.status(200).json(req.body);
});

router.get('/logout',(req,res)=>{
    
});

router.get('/users',(req,res)=>{
    res.status(200).json(users)
});

router.get('/users/:id',(req,res)=>{
    res.status(200).json(userprofile)
});

router.get('/churchs',(req,res)=>{
    res.status(200).json(churchs);
});

router.get('/churchs/:id',(req,res)=>{
    res.status(200).json(churchprofile);
});

router.get('/orders',(req,res)=>{
    res.status(200).json(orders);
});

router.get('/orders/:id',(req,res)=>{
    // show the item list
    res.status(200).json(order_itemlist);
});

router.get('/orders/detail/:id',(req,res)=>{
    // show the detail list
    res.status(200).json(order_detail);
});

router.get('/roles',(req,res)=>{
    res.status(200).json(roles);
});

router.get('/donations',(req,res)=>{
    res.status(200).json(donations);
});
/**
 * Address Start
 */
router.get('/address',(req,res)=>{
    res.status(200).json(address);
});

router.get('/address/:id',(req,res)=>{
    res.status(200).json(address);
});
router.post('/address',(req,res)=>{
    res.status(200).json(req.body);
});

router.put('/address/:id',(req,res)=>{
    res.status(200).json(req.body);
});

router.delete('/address/:id',(req,res)=>{
    res.status(200).json(req.body);
});
/**
 * Card start
 */
router.get('/card',(req,res)=>{
    res.status(200).json(card);
});

router.get('/card/:id',(req,res)=>{
    res.status(200).json(card);
});

router.post('/card',(req,res)=>{
    res.status(200).json(card);
});

router.put('/card/:id',(req,res)=>{
    res.status(200).json(card);
});

router.delete('/card/:id',(req,res)=>{
    res.status(200).json(card);
});

router.get('/articles',(req,res)=>{
    res.status(200).json(article);
});

module.exports = router;
