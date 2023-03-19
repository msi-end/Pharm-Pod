const express = require('express');
const route = express.Router();
const databaseCon = require('../models/db.model');

route.get('/:user/admin/ApplyRequest', (req, res) => {
    if (req.session.loggedin) {
        res.render('../views/admin/ApplyReq')
    }else{
        res.render('../views/admin/userError')
    }
})
route.get('/:user/admin/settings', (req, res) => {
     if (req.session.loggedin) {
    res.render('../views/admin/settings')
     }else{
        res.render('../views/admin/userError')
     }
})

module.exports = route;