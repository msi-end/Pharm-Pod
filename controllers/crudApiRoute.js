const express = require('express');
const create = require('../models/crud.model.js');
const router = express.Router();
const crudModel = require('../models/crud.model.js')


//To Create or Add Clients
router.post('/create',crudModel.create);
// To get all Clients
router.get('/getAll', crudModel.getAll);
// //To Find a Client
router.get('/findOne/:id', crudModel.findOne);
// //To update any Clients
router.put('/update/:id', crudModel.update);
// //To delete a Client
router.delete('/delete/:id', crudModel.delete);
// //To schedule Client
router.post('/postpond', crudModel.postpond);

module.exports = router;