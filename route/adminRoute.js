const express = require('express');
const route = express.Router();
const databaseCon = require('../models/db.model');


route.get('/:user/admin', async (req, res) => {
    let user =req.params.user;
    let tdt =new Date().toLocaleDateString('en-GB',{day:"2-digit" ,month: "2-digit",year:"numeric" })
    if (req.session.loggedin) {
        databaseCon.query(`SELECT * from ${req.session.user_id}_PS_data WHERE p_aptDate='${tdt}' AND p_aptStatus='true';SELECT form_Status,autoReqAppl,maxApply FROM client_Info WHERE c_id='${req.session.user_id}' ;SELECT d_name from cl_doctor WHERE c_id = '${req.session.user_id}';SELECT COUNT(p_aptStatus) as cout FROM ${req.session.user_id}_PS_data WHERE p_aptDate='${tdt}' AND p_aptStatus='false'`, function (err, results, fields) {
       
            console.log(results[3][0].cout);
            if (err) {console.log('Admin Route Error' + err)};
         if(true) {res.status(200).render('../views/admin/index.ejs',{sets:results[1][0],doc:results[2],ps_data:results[0],aplReq:results[3]})}
        else{res.status(200).render('../views/admin/index.ejs',{sets:results[1][0],doc:results[2],ps_data:''})} 
        }) } else {res.redirect(`/${user}/admin/login`) }});



route.get('/:user/admin/ApplyRequest', (req, res) => {
    if (req.session.loggedin) {
        let tdt =new Date().toLocaleDateString('en-GB',{day:"2-digit" ,month: "2-digit",year:"numeric" })
        databaseCon.query(`SELECT * from ${req.session.user_id}_PS_data WHERE p_aptDate='${tdt}' AND p_aptStatus='false'  ;`, function (err, results, fields) {
            if (err) {console.log('Admin Route Error' + err)}
        res.status(200).render('../views/admin/ApplyReq.ejs',{ps_data:results})
    })
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