const router = require('express').Router();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
var promise = mongoose.connect('mongodb://localhost/awana', {useMongoClient: true});
const bluebird = require('bluebird');
mongoose.Promise = bluebird;

const userController = require('../controllers/User.controller');
const profileController = require('../controllers/Profile.controller');

module.exports = router;