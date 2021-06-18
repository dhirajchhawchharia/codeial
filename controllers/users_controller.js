const User = require('../models/user');

module.exports.profile = function(req, res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id, function(err, user){
            if(err){
                console.log('Error in accessing the user profile');
                return;
            }
            if(!user){
                res.redirect('/sign-in');
            }
            else{
                return res.render('user_profile', {
                    title: 'Signed In',
                    user: user
                });
            }
        });
    }
    else{
        return res.redirect('/sign-in');
    }
};

module.exports.likes = function(req, res){
    return res.end('<h1>Likes Likes</h1>');
};

module.exports.default = function(req, res){
    return res.render('users', {
        title: 'Users Home'
    });

    //return res.end('<h1>Default</h1>');
}

module.exports.posts = function(req, res){
    return res.end('<h1>Posts</h1>');
};