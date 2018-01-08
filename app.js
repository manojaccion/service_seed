
const bodyparser = require('body-parser');
const morgan = require('morgan');

const express = require('express');

const app= express();
const router = require('./app/routes/router');
const apirouter = require('./app/routes/apirouter');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(morgan("dev"));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.use('/api',router);
app.use('/api/v1',apirouter);

app.disable('x-powered-by');

app.listen(3000,(req,res)=>{
    console.log("app started");
});




