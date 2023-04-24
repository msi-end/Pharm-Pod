const express = require('express');
const router = express.Router();
const reviewModel = require('../controllers/review.js')


// //To Create or Add Reviews
router.post('/rv',reviewModel.pushData);

// // To get all Reviews
// router.get('/getAll', reviewModel.getCls);

// //To Find a Reviews
router.get('/fn/:id', reviewModel.getClsID);


router.get('/revv/:id', reviewModel.getRevID);



// // //To delete a reviews
// router.delete('/delete/:id', reviewModel.delete);

// // //To update any Reviews
// router.put('/update/:id', reviewModel.update);

module.exports = router;