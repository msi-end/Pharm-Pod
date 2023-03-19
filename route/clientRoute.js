const express = require('express');
const route = express.Router();
const fs = require('fs')
const database = require('../models/db.model')
const crudModel = require('../controllers/crud-API.js')



route.get('/', (req, res) => {
    console.log('ok');
    res.render('../views/client/index.ejs')
})
route.get('/:page', (req, res) => {
    if (fs.existsSync(`./views/client/Cl_pages/${req.params.page}.ejs`)) {
        res.status(200).render(`../views/client/CL_pages/${req.params.page}.ejs`)
    } else { res.status(400).render('../views/client/error.ejs') }
})
route.get('/p/aboutus', (req, res) => {
    res.render('../views/client/page/aboutus.ejs')
})
route.post('/:user/addApply', crudModel.add)


module.exports = route;