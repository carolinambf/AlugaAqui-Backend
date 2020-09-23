const user = require("../models/user");

const authUser = function(req, callback) {                         // autenticação de utilizadores
    let token = req.headers.authorization;                          
    if(!token) {
        callback(null);
        return;
    }
    token = token.replace("Bearer ", "");                          // verificação através de tokens
    user.findOne({ "token": token }, function(err, user) {
        callback(user);
    });
};
exports.authUser = authUser;

exports.verifyToken = function(req, res, callback) {                // caso este utilizador não exista, é enviado uma mensagem de erro
    authUser(req, function(user) {
        if(user === null) {
            res.json({
                error: "Autenticação Inválida",
            });
            return;
        }
        callback(user);
    });
};
