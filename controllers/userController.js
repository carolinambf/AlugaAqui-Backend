const User = require('../models/user');
const sha256 = require('sha256');
const { verifyToken } = require('../auth/user');

exports.register = function(req, res) {                                             // registo de conta 
    let user = new User();
    user.email = req.body.email;
    user.name = req.body.name;
    user.nif = req.body.nif;
    user.password = sha256(req.body.password);
    user.save();
    res.json({
        _id: user._id,
        email: user.email,
        name: user.name,
        nif: user.nif,
    });
};

exports.login = function(req, res) {                                                // login 
    User.findOne({ "email": req.body.email }, function(err, user) {                 // verificação de existência do utilizador 
        if(user == null) {
            res.json({
                error: "Utilizador inexistente"
            });
            return;
        }
        let password = req.body.password;
        if(user.password == sha256(password)) {                                     // encripita a password 
            let token = sha256("" + (Math.random() * 10000));
            user.token = token;
            user.save();
            res.json({
                token: token,
            });
        } else { 
            res.json({                                       
                error: "Login incorreto",
            });
        }
    });
};

exports.get = function(req, res) {
    verifyToken(req, res, function(user) {
        res.json({
            _id: user._id,
            email: user.email,
            name: user.name,
            nif: user.nif,
        });
    });
};

exports.logout = function(req, res) {                                              //logout do utilizador
    verifyToken(req, res, function(user) {
        user.token = null;
        user.save();
        res.json(true);
    });
};
