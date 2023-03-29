const express = require('express');
const route = express.Router();
const databaseCon = require('../models/db.model');

let user = null;
route.get('/:user/admin', async (req, res) => {
    let tdt =new Date().toLocaleDateString({ month: "2-digit",year:"numeric", day:"2-digit"})
    user = req.params.user;
    if (req.session.loggedin) {
        databaseCon.query(`SELECT form_Status,autoReqAppl,maxApply FROM client_Info; SELECT * from ${req.session.user_id}_PS_data WHERE p_aptDate='${tdt}';SELECT d_name from cl_doctor WHERE c_id = '${req.session.user_id}'`, function (err, results, fields) {
            if (err) {
                console.log('Admin Route Error' + err)
            } else {
                 res.status(200).render('../views/admin/index.ejs',{sets:results[0][0],ps_data:results[1],doc:results[2]})
                 } }) } else {res.redirect(`/${user}/admin/login`) }});


route.get('/:user/admin/login', (req, res) => {
    if (req.session.loggedin) {
        res.redirect(`/${user}/admin`)
    } else { res.status(200).render('../views/admin/loginPage.ejs') }})


route.post('/:user/admin/auth', async (req, res) => {
    if (req.body.Username && req.body.Password) {
        const query = `SELECT username,password FROM auth WHERE c_id ='${user}'`;
        await databaseCon.query(query, [req.body.Username, req.body.Password], (err, results, fields) => {
            if (err) throw err
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.user_id = req.body.Username
    // console.log(req.session);
                res.redirect(`/${user}/admin`);
            } else {
                res.redirect(`/${user}/login`)
            }
        })
    }
});

route.get('/:user/admin/logOut', (req, res) => {
    req.session.destroy();
    res.redirect(`/${user}/admin/login`)
})



module.exports = route;