const db = require('../config/mongoose');
const User = require('../models/user');

//Load sign up page
module.exports.signUpPage = function(req, res){
    return res.render('user_sign_up', {
        title: 'Sign Up',
    });
};

//sign up form collect and store
module.exports.createUser = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log('error in finding user in signing up');
            return;
        }
        if(!user){
            User.create({
                email : req.body.email,
                password : req.body.password,
                name : req.body.name   
            }, function(err, newUser){
                if(err){
                    console.error('Error in creating new user', err);
                    return;
                }
                return res.redirect('/sign-in');
            });
        }
        else{
            return res.redirect('back');
        }
    });
};