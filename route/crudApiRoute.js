const express = require('express');
const router = express.Router();
const crudModel = require('../controllers/crud-API.js')


//To Create or Add by Clients
router.post('/add',crudModel.create);

//To Create or Add by Patient
router.post('/crt',crudModel.create);
// To get all Clients
router.post('/get', crudModel.getAll);
// //To Find a Clients
router.get('/fnO/:id', crudModel.findOne);
// //To update any Clients
router.put('/upd/:id', crudModel.update);
// //To delete a Clients
router.delete('/del/:id', crudModel.delete);
// //To schedule Clients
router.post('/postpond', crudModel.postpond);

module.exports = router;