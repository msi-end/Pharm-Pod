const express = require('express');
const route = express.Router();
const databaseCon = require('../models/db.model');
const { createHmac } = require('crypto')

let user = null;
route.get('/:user/admin/login', (req, res) => {
    user = req.params.user;
    if (req.session.loggedin) {
        res.redirect(`/${user}/admin`)
    } else { res.status(200).render('../views/admin/loginPage.ejs') }})


route.post('/:user/admin/auth', async (req, res) => {
    user = req.params.user
    if (req.body.Username && req.body.Password) {
        const query = `SELECT username,password FROM auth WHERE c_id ='${user}'`;
        const hash = createHmac('sha256', 'secret').update(req.body.Password).digest('hex');
        await databaseCon.query(query, (err, rows, fields) => {
            if (err) throw err
            if (rows.length > 0) {
                if (req.body.Username == rows[0].username && hash == rows[0].password) {
                    req.session.loggedin = true;
                    req.session.user_id = req.body.Username
                res.redirect(`/${user}/admin`);}
            } else {
                res.redirect(`/${user}/login`)
            } })}});

route.get('/:user/admin/logOut', (req, res) => {
    user = req.params.user;req.session.destroy();
    res.redirect(`/${user}`)
})



module.exports = route;