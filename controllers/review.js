const databaseCon = require('../models/db.model');

exports.pushData = (req, res) => {
    console.log(req.body);
    let a = req.body.review === '' ? null : `"${req.body.review}"`;
    let b = req.body.rating === '' ? null : `"${req.body.rating}"`;
    let email = req.body.email === '' ? null : `"${req.body.email}"`;
    let query = `INSERT INTO rr_data ( c_id, rating, review, userName,email) VALUES ('${req.body.c_id}', ${b}, ${a}, '${req.body.userName}','${email}')`;
    databaseCon.query(query, (err, res) => {
        if (err) throw err;
        console.log(err)
    })
    res.send('sended succesfully');
}

exports.getCls = (req, res) => {
    let q = `SELECT client_Info.c_id, client_Info.Name, client_Info.location, COUNT(rr_data.rev) AS total_review,
             AVG(rr_data.rating) AS star FROM client_Info INNER JOIN rr_data ON rr_data.c_id = client_Info.c_id
             GROUP BY c_id;`;
             let sql='SELECT * from rr_data'
    databaseCon.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
        console.log("sended all data");
    })
}

exports.getClsID = (req, res) => {
    console.log(req.body)
    let q = `SELECT client_Info.c_id, client_Info.c_name, rr_data.review, rr_data.userName FROM client_Info INNER JOIN rr_data ON rr_data.c_id = client_Info.c_id 
            WHERE client_Info.c_id ='${req.params.id}'`
    databaseCon.query(q, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
}