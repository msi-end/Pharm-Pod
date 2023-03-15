const express = require('express');
const route = express.Router();
const fs = require('fs')
const database = require('../models/db.model')
const crudModel = require('../models/crud.model.js')



route.get('/', (req, res) => {
    console.log(req.params.ok)
    res.send('home client')
})
route.get('/:page', (req, res) => {
    if (fs.existsSync(`./views/client/pages/${req.params.page}.ejs`)) {
        res.status(200).render(`../views/client/pages/${req.params.page}.ejs`)
    } else {
        res.status(400).render('../views/error.ejs')
    }
})
route.post('/addApply', crudModel.create)






module.exports = route;