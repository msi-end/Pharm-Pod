const databaseCon = require('./db.model');

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

exports.findOne = (req, res) => {
    databaseCon.query('select * from Client_Details where id=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send('Endter value Correctly');
    }
    databaseCon.query('UPDATE `Client_Details` SET `clientName`=?,`clientInfo`=? where `id`=?', [req.body.clientName, req.body.clientInfo, req.params.id],
        function (error, results, fields) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
};
exports.delete = (req, res) => {
    databaseCon.query('DELETE FROM `Client_Details` WHERE `id`=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        console.log(req.params.id + "+++" + results)
        res.end('Client has been deleted!');
    });
};
exports.postpond = (req, res) => {
    if (!(req.body)) {
        res.status(400).send(' selet Date');
    }
    databaseCon.query('INSERT INTO Client_Details SET ?', x, function (err, results, fields) {
        if (err) throw err;
        return res.send('added' + results.status)
    })
}