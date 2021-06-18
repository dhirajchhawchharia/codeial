module.exports.signOut = function(req, res){
    if(req.cookies.user_id){
        res.clearCookie('user_id');
    }
    return res.redirect('/sign-in');
}