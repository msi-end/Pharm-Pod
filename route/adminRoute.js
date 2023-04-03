const express = require('express');
const route = express.Router();
const databaseCon = require('../models/db.model');


route.get('/:user/admin', async (req, res) => {
    let user = null;
    let tdt =new Date().toLocaleDateString({ month: "2-digit",year:"numeric", day:"2-digit"})
    user = req.params.user;
    if (req.session.loggedin) {
        databaseCon.query(`SELECT form_Status,autoReqAppl,maxApply FROM client_Info; SELECT * from ${req.session.user_id}_PS_data WHERE p_aptDate='${tdt}';SELECT d_name from cl_doctor WHERE c_id = '${req.session.user_id}'`, function (err, results, fields) {
            if (err) {
                console.log('Admin Route Error' + err)
            } else {
                 res.status(200).render('../views/admin/index.ejs',{sets:results[0][0],ps_data:results[1],doc:results[2]})
                 } }) } else {res.redirect(`/${user}/admin/login`) }});


route.get('/:user/admin/ApplyRequest', (req, res) => {
    if (req.session.loggedin) {
        res.render('../views/admin/ApplyReq.ejs')
    }else{
        res.render('../views/admin/userError.ejs')
    }})

route.get('/:user/admin/settings', (req, res) => {
     if (req.session.loggedin) {
    res.render('../views/admin/settings.ejs')
     }else{
        res.render('../views/admin/userError.ejs')
     }})

module.exports = route;