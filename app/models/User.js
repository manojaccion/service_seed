const mongoose = require('mongoose');
const schema = mongoose.Schema;

var UserSchema = new schema({
    email: String,
    pass: String,
    token: String
});

module.exports = mongoose.model('User',UserSchema);