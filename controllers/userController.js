'use strict'
var mongoose = require('mongoose')
User = mongoose.model('User')

exports.createUser = function(req, res){
    var newUser = new User(req.body)
    newUser.save(function(err, user){
        if(err) throw err
        res.json(user)
        console.log("Added User" + user)
    })
}

exports.listAllUsers = function(req, res){
    User.find({}, function(err, user){
        res.json(user)
    })
}
exports.readAUser = function(req, res){
    console.log('inside ReadAUser')
    console.log(req.params.userId)
    User.findById(req.params.userId, function(err, user){
        if(err) throw err
        console.log(user)
        res.json(user)
    })
}
exports.updateAUser = function(req, res){
    var newUser = {}
    newUser = req.body
    User.findByIdAndUpdate(req.params.userId, newUser ,{new: true}, function(err, user){
        if(err) console.log("Error in Update A User")
        console.log("Update info of " + user._id)
        res.json(user)
    })
}
exports.deleteAUser = function(req, res){
    User.findByIdAndRemove(req.params.userId, function(err, user){
        if(err) console.log("Error in Del a User")
        res.json(user)
    })
}