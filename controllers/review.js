const databaseCon = require('../models/db.model');

exports.create = (req, res) => {
    let params = req.body;
    if (!params) {
        res.status(400).send('Enter All Datails');
    } databaseCon.query('INSERT INTO Client_Details SET ?', [params], function (err, results, fields) {
        if (err) throw err;
        res.send('added')
    })
}
exports.getAll = (req, res) => {
    databaseCon.query('SELECT * FROM Client_Details', function (err, results, fields) {
        if (err) throw err;
        res.end(JSON.stringify(results));
    })
}

exports.delete = (req, res) => {
    databaseCon.query('DELETE FROM `Client_Details` WHERE `id`=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        console.log(req.params.id + "+++" + results)
        res.end('Client has been deleted!');
    });
};
