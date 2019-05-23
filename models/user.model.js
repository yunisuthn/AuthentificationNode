const mongoose = require('mongoose')

const User = mongoose.Schema({
    nom: String,
    email: String,
    password: String
},{
    timestamps: true
});

module.exports = mongoose.model('user', User);