'use strict'
var mongoose = require('mongoose')
User2 = mongoose.model('userlogin')

exports.checkUser = function(req, res){
    var login = req.body
    User2.find({},null, function(err, user){
        if(err) console.log("Error in checkUser")
        res.json(user)
    })
}