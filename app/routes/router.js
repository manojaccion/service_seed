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

const hello={"text":"hello World"};
router.get('/hello',(req,res)=>{
    res.status(200).json(hello);
});

router.post('/authenticate',(req,res)=>{

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

router.get('/address',(req,res)=>{
    res.status(200).json(address);
});
router.get('/card',(req,res)=>{
    res.status(200).json(card);
});


module.exports = router;
