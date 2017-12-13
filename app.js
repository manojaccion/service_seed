
const bodyparser = require('body-parser');
const morgan = require('morgan');
const jsonwebtoken = require('jsonwebtoken');
const express = require('express');

const app= express();
const router = require('./app/routes/router');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(morgan("dev"));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.use('/',router);

app.listen(3000,(req,res)=>{
    console.log("app started");
});
