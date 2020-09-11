const user = require("../models/user");

const authUser = function(req, callback) {
    let token = req.headers.authorization;
    if(!token) {
        callback(null);
        return;
    }
    token = token.replace("Bearer ", "");
    user.findOne({ "token": token }, function(err, user) {
        callback(user);
    });
};
exports.authUser = authUser;

exports.verifyToken = function(req, res, callback) {
    authUser(req, function(user) {
        if(user === null) {
            res.json("Autenticação Inválida");
            return;
        }
        callback(user);
    });
};
