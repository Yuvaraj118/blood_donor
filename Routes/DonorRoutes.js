const express = require('express');
const router = express.Router();
const donorController = require('../controller/DonorController');


router.get('/api/donor', donorController.getAllDonors);
router.get('/api/donors/:id', donorController.getSingleDonor);

router.post('/api/donor', donorController.addNewDonor)

router.put('/api/donor', donorController.updateDonor)

router.delete('/api/donor/:id', donorController.deleteDonor)

module.exports = router;
