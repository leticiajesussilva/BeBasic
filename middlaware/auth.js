function auth(req, res, next){
    if(typeof(req.session.usuario) != 'undefined'){
        return next()
    }
    else {
    return res.send("você precisa estar logado para ter acesso")
    // return res.render("login")
    }
}

module.exports = auth