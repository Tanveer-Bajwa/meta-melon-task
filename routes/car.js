const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
    createCar,
    getAllCars,
    getCarById,
    updateCar,
    deleteCar
} = require('../controller/carController');

router.post('/', protect, createCar);
router.get('/', protect, getAllCars);
router.get('/:id', protect, getCarById);
router.put('/:id', protect, updateCar);
router.delete('/:id', protect, deleteCar);

module.exports = router;
