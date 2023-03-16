const express = require('express');
const router = express.Router();
const crudModel = require('../controllers/crud-API.js')


//To Create or Add Clients
router.post('/create',crudModel.create);
// To get all Clients
router.get('/getAll', crudModel.getAll);
// //To Find a Clients
router.get('/findOne/:id', crudModel.findOne);
// //To update any Clients
router.put('/update/:id', crudModel.update);
// //To delete a Clients
router.delete('/delete/:id', crudModel.delete);
// //To schedule Clients
router.post('/postpond', crudModel.postpond);

module.exports = router;