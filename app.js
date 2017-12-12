
const bodyparser = require('body-parser');
const morgan = require('morgan');
const jsonwebtoken = require('jsonwebtoken');
const express = require('express');

const app= express();

const route = app.route();

app.use('/',router);

app.listen(3000,(req,res)=>{
    console.log("app started");
});
