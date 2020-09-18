const Rent = require('../models/rent');
const prices = require('../prices');
const { verifyToken } = require('../auth/user');

exports.all = function(req, res) {
    verifyToken(req, res, function(user) {
        Rent.find({user_id: user._id}, function(err, rents) {
            res.json(rents);
        });
    });
};

exports.get = function(req, res) {
    verifyToken(req, res, function(user) {
        Rent.findById(req.params.id, function(err, rent) {
            res.json(rent);
        });
    });
};

exports.store = function (req, res) {
    verifyToken(req, res, function(user) {
        let rent = new Rent();
        rent.movie_id = req.body.movie_id;
        rent.movie_name = req.body.movie_name;
        rent.price = prices[rent.movie_id] ? prices[rent.movie_id] : 5.99;
        rent.user_id = user._id;
        rent.save();
        res.json(rent);
    });
};

exports.return = function (req, res) {
    verifyToken(req, res, function(user) {
        Rent.findById(req.params.id, function(err, rent) {
            rent.date_returned = new Date();
            rent.save();
            res.json(rent); 
        });
    });
};
