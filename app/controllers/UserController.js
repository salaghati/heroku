const User = require('../models/User');
const express = require('express');
const app = express();

class UserController {
    index(req,res,next){
        User.find({})
        .then(users =>{
            res.json(users);
        })
        .catch(next);
    }

}
module.exports = new UserController;