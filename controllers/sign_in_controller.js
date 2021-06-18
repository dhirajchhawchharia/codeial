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
    //find the user
    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log('Error in finding user in signing in');
            return;
        }

        //handle user found
        if(user){
            //handle password which doesn't match
            if(user.password != req.body.password){
                return res.redirect('back');
            }

            //handle session createSession
            res.cookie('user_id', user.id);
            return res.redirect('/users/profile');
        }
        else{
            //handle user not found
            return res.redirect('back');
        }
    });



    


    



}