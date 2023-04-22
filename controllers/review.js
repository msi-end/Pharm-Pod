const databaseCon = require('../models/db.model');

exports.pushData = (req, res) => {
    let a = req.body.review === '' ? null : `"${req.body.review}"`;
    let b = req.body.rating === '' ? null : `"${req.body.rating}"`;
    let c = req.body.u_name === '' ? null : `"${req.body.u_name}"`;
    let d = req.body.mail === '' ? null : `"${req.body.mail}"`;
    //console.log(req.body);
    let query = `INSERT INTO rr_data ( c_id, rating, review, userName, email) VALUES ('${req.body.idNum}', ${b}, ${a}, ${c}, ${d})`;
    databaseCon.query(query, (err, res) => {
        if (err) throw err;
    })
    res.send('sended succesfully');
}

// exports.getCls = (req, res) => {
//     let q = `SELECT client_Info.c_id, client_Info.Name, client_Info.location, COUNT(rr_data.rev) AS total_review,
//              AVG(rr_data.rating) AS star FROM client_Info INNER JOIN rr_data ON rr_data.c_id = client_Info.c_id
//              GROUP BY c_id;`;
//     databaseCon.query(q, (err, result) => {
//         if (err) throw err;
//         res.send(result);
//         console.log("sended all data");
//     })
// }

exports.getClsID = (req, res) => {
    //console.log(req.body)
    let q = `SELECT client_Info.c_id, client_Info.c_name, client_Info.c_location, COUNT(rr_data.review) 
    AS total_review, AVG(rr_data.rating) AS star FROM client_Info INNER JOIN rr_data ON 
    rr_data.c_id = client_Info.c_id WHERE client_Info.c_id ='${req.params.id}' GROUP BY c_id;`
    databaseCon.query(q, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
}

exports.getRevID = (req, res) => {
    //console.log(req.body)
    let q = `SELECT client_Info.c_id, client_Info.c_name, rr_data.review, rr_data.userName FROM client_Info INNER JOIN rr_data ON rr_data.c_id = client_Info.c_id 
    WHERE client_Info.c_id ='${req.params.id}'`
    databaseCon.query(q, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
}