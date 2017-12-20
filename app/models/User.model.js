const mongoose = require('mongoose');
var promise = mongoose.connect('mongodb://localhost/awana', {useMongoClient: true});
const bluebird = require('bluebird');
const schema = mongoose.Schema;

var UserSchema = new schema({
    email: String,
    pass: String,
    token: String
});

module.exports = mongoose.model('User',UserSchema);