const database = require('../models')


const loginController = {
    loginPage: (req, res) => {
    return res.render('login')
}}

module.exports = loginController;