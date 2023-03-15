const express = require('express');
const route = express.Router();
const database =require('../models/db.model')


route.get('/',(req,res)=>{
   console.log(req.params.ok)
 res.send('home client')
})
route.get('/:page',(req,res)=>{
   let sql = `SELECT * FROM CLients WHERE ClientName="${req.params.page}"`;

   

})

route.post('/addApply',(req,res)=>{


   })
   
   




module.exports=route;