const databaseCon = require('../models/db.model');

exports.add =(req, res) => {
    
    let params = req.body;
    if (!params) {
        res.status(400).send('Enter All Datails');
    } databaseCon.query('INSERT INTO Client_Details SET ?', [params], function (err, results, fields) {
        if (err) throw err;
        res.send('added')
    })
}
