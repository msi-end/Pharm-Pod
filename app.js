const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser')
const path =require('path')
const ejs = require('ejs');
const PORT = 3000 || process.env.PORT;

const adminRoute = require('./controllers/admin.login.Route.js')
const ClientView =require('./controllers/client.side.route.js')
const apiV2 =require('./controllers/crudApiRoute.js')
 
app.use(session({
    secret: 'secret',  
    resave: false,
    saveUninitialized: true
}));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.set('views', __dirname + '/views');
app.set('view engin', ejs);

// Client side views
app.use('/', ClientView);

// Admin Crud API & AdminLogin 
app.use('/apiV2', apiV2);
app.use('/admin', adminRoute);
app.get('*',(req,res)=>{ 
res.redirect('/admin');
})
app.listen(PORT, ()=>{console.log('Running on port '+PORT)})