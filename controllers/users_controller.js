module.exports.profile = function(req, res){
    return res.end('<h1>User Profile</h1>');
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