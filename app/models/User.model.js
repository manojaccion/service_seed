const mongoose = require('mongoose');

const schema = mongoose.Schema;

var UserSchema = new schema({
    first_name:String,
    last_name:String,

    name:String,
    mobile:String,
    street:String,
    city:String,
    state_address:String,
    country:String,
    zip:String,
    pic_url:String,



    email:String,
    awana_role: Array,
    church_role:String,
    acct_owner:String,
    access_level:String,
    status:String,
    has_personal_acct:String,
    last_login:String,
    gender:String,
    birthdate:String,
    home_phone:String,
    
    username:String,
    password:String,
    access_token:String,
    signature:String

});

module.exports = mongoose.model('User',UserSchema);