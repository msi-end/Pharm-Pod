const { query } = require('express');
const session = require('express-session');
const databaseCon = require('../models/db.model');

// patient application req
exports.add = (req, res) => {
    let user = req.params.user;
    databaseCon.query(`SELECT COUNT(p_aptDate) as count from ${user}_PS_data WHERE p_aptDate='${req.body.date}'; SELECT maxApply ,autoReqAppl from client_Info WHERE c_id='${user}'`, function (err, results, fields) {
        if (err) throw err;// console.log(results);
        if (results[1][0].maxApply >= results[0][0].count) {
            console.log(results[1][0].autoReqAppl);
            let params =[req.body.name,req.body.number,req.body.otherInfo,req.body.doctor,req.body.date];
            let sql = `INSERT INTO ${user}_PS_data (p_name,p_number,p_OthInfo,p_doctor,p_aptDate) VALUES (?) `;
            databaseCon.query(sql,[params], function (err, results, fields) {
                if (err) throw err;
                res.send({ status: 'true', msg: 'Application submited Sucessfully!' })
            }) }else{ res.status(403).send({status: 'false', msg: 'Application Limite Exceeded!' }) }
    })}


// ADMIN CRUD 
// Admin Side Crud 
exports.create = (req, res) => {
    if (req.session.loggedin) {
        console.log(req.body);
        let params =[req.body.name ,req.body.OthInfo,req.body.doctor,req.body.date];
        let sql = `INSERT INTO ${req.session.user_id}_PS_data (p_name,p_OthInfo,p_doctor,p_aptDate) VALUES (?) `;
        databaseCon.query(sql,[params], function (err, results, fields) {
            if (err) throw err;
            res.status(201).send({ status: 'true', msg: 'Patient Created Sucessfully!' })
        })}else{
            res.status(401).send({status:'false', msg: 'Somthing Wrong ! 401 Unauthorized' })
        }}
        
exports.getAll = (req, res) => {
    if (req.session.loggedin) {
    let user = req.session.user_id;
    databaseCon.query(`SELECT * FROM ${user}_PS_data WHERE p_aptDate='${req.query.dt}'`, function (err, results, fields) {
        if (err) throw err;
        res.status(201).send({status:'true', msg: 'Sucessfully date retrived ! ' , data:results})
    })}else{
        res.status(401).send({status:'false', msg: 'Somthing Wrong ! 401 Unauthorized' })
    }}


exports.delete = (req, res) => {
    if (req.session.loggedin) {
        let user = req.session.user_id;
    databaseCon.query(`DELETE FROM ${user}_PS_data WHERE 'id'=?`, [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end('Client has been deleted!');
    });
}};

// /udt/7 with data , /udt?maxAp , /udt?autoAp, /udt?fState
exports.update = (req, res) => {
    if (req.session.loggedin) {
    if (!req.body) {
        return res.status(400).send({status:'false', msg:'Enter value Correctly'});}
    else if(req.params.id){
    let user = req.session.user_id;
    databaseCon.query(`UPDATE '${user}_PS_data SET' 'clientName'=?,'clientInfo'=? where 'id'=?`, [req.body.clientName, req.body.clientInfo, req.session.user_id],
        function (error, results, fields) { 
            if (error) throw error;
            res.end(JSON.stringify(results));
        });}
    else if(req.query){
        let obj={maxAp:'maxApply',autoAp:'autoReqAppl',fState:'form_Status'}
        if(Object.keys(req.query) in obj){
       let sql=`UPDATE client_Info SET ${obj[(Object.keys(req.query))]}='${Object.values(req.query)[0]}' WHERE c_id='${req.session.user_id}' `;
       databaseCon.query(sql,(err,results)=>{
        if (err){res.status(400).send({status:'false', msg: 'Setting Updated Unsucessful!'})}else{
        res.status(200).send({status:'true', msg: 'Setting Updated Sucessfully! , Refresh the Page' })}
       })}
    }}};


exports.findOne = (req, res) => {
    databaseCon.query('select * from Client_Details where id=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
};


exports.postpond = (req, res) => {
    if (!(req.body)) {
        res.status(400).send(' selet Date');
    }
    databaseCon.query('INSERT INTO Client_Details SET ?', [x], function (err, results, fields) {
        if (err) throw err;
        return res.send('added' + results.status)
    })
}