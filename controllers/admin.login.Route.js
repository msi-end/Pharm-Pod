const express = require('express');
const route = express.Router();
const databaseCon = require('../models/db.model');

route.get('/', async (req, res) => {
    if (req.session.loggedin) {
        await databaseCon.query('SELECT * FROM Client_Details', function (err, results, fields) {
            if (err) {
                console.log('Admin Route Error' + err)
            } else {
                res.status(200).render('../views/admin/index.ejs', { data: results })
            }
        })
    } else {
        res.redirect('/admin/login')
    }
});
route.get('/login', (req, res) => {
    if (req.session.loggedin) {
        res.redirect('/admin')
    } else { res.status(200).render('../views/admin/loginPage.ejs') }
})
route.post('/auth', async (req, res) => {
    if (req.body.Username && req.body.Password) {
        const query = 'SELECT * FROM auth WHERE username=? AND password=?';
        await databaseCon.query(query, [req.body.Username, req.body.Password], (err, results, fields) => {
            if (err) throw err
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.name = req.body.Username;
                res.redirect('/admin');
            } else {
                res.redirect('/login')
            }
        })
    }
});

route.get('/logOut', (req, res) => {
    req.session.destroy();
    res.redirect('/admin/login')
})
module.exports = route;