const express = require('express');
const route = express.Router();
const fs = require('fs')
const db = require('../models/db.model')
const crudModel = require('../controllers/crud-API.js')



route.get('/', (req, res) => {
    // console.log(req );
    res.render('../views/client/index.ejs')
})
route.get('/:page', (req, res) => {
    if (fs.existsSync(`./views/client/Cl_pages/${req.params.page}.ejs`)) {
        db.query(`SELECT form_Status FROM client_Info WHERE c_id='${req.session.user_id}'`, function (err, results, fields) {
            if (err) {console.log('Admin Route Error' + err)
            } else { res.status(200).render(`../views/client/Cl_pages/${req.params.page}.ejs`,{date:results})}});
    } else { res.status(400).render('../views/client/error.ejs') }})


route.get('/p/aboutus', (req, res) => {
    res.render('../views/client/page/aboutus.ejs')
})
route.get('/p/contactus', (req, res) => {
    res.render('../views/client/page/contactus.ejs')
})
route.get('/p/clinics', (req, res) => {
    res.render('../views/client/page/allclinics.ejs')
})
route.get('/p/privacy-policy', (req, res) => {
    res.render('../views/client/page/privacypolicy.ejs')
})
route.get('/p/terms-conditions', (req, res) => {
    res.render('../views/client/page/t&c.ejs')
})
route.get('/p/health-tips', (req, res) => {
    res.render('../views/client/page/healthtips.ejs')
})
route.get('/p/doctors', (req, res) => {
    res.render('../views/client/page/alldoctrs.ejs')
})
route.post('/:user/addApply', crudModel.add)


module.exports = route;