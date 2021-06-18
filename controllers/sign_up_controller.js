const db = require('../config/mongoose');
const User = require('../models/user');

module.exports.signUpPage = function(req, res){
    return res.render('signup', {
        title: 'Sign Up',
    });
};

module.exports.signUpForm = function(req, res){
    User.create({
        email : req.body.email,
        password : req.body.password,
        name : req.body.name   
    }, function(err, newUser){
        if(err){
            console.error('Error in creating new user', err);
            return;
        }
        console.log(newUser);
        return res.redirect('back');
    });
};