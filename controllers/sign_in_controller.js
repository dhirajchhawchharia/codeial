const db = require('../config/mongoose');
const User = require('../models/user');

//load sign in page
module.exports.signInPage = function(req, res){
    return res.render('user_sign_in', {
        title: 'Sign In Page'
    });
};

//Authenciate sign in user data
module.exports.createSession = function(req, res){
    User.find({email: req.body.email, password: req.body.password}, function(err, user){
        if(err || user.length == 0){
            console.log('Please enter correct details');
            return;
        }
        console.log('Successfully signed In ', user);
        return res.redirect('back');
    });
}