const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser')
const path =require('path')
const ejs = require('ejs');
const PORT = 8000 || process.env.PORT;
const LokiStore = require('connect-loki')(session);


var options = {path:'./sessions/authSession.db'};
const adminLogRoute = require('./controllers/admin.login.js')
const adminRoute = require('./route/adminRoute.js')
const ClientView =require('./route/clientRoute.js')
const apiV3 =require('./route/crudApiRoute.js')
 

const athTime = 1000*60*60*24*15;
app.use(session({
    store: new LokiStore(options),
    secret: "secrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: athTime },
    resave: false 
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
app.use('/apiV3', apiV3);
app.use(adminLogRoute);
app.use(adminRoute);

app.get('*',(req,res)=>{ 
res.render('../views/client/error.ejs');
})
app.listen(PORT, ()=>{console.log('Running on port '+PORT)})