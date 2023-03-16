const express = require('express');
const router = express.Router();
const reviewModel = require('../models/reviewModel.model.js')


// //To Create or Add Reviews
router.post('/create',reviewModel.create);

// // To get all Reviews
router.get('/getAll', reviewModel.getAll);

// // //To delete a reviews
router.delete('/delete/:id', reviewModel.delete);

// // //To update any Clients
// router.put('/update/:id', reviewModel.update);

// // //To Find a Clients
// router.get('/findOne/:id', reviewModel.findOne);
module.exports = router;