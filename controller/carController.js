const Car = require('../model/Car');

const createCar = async (req, res) => {
    try {
        const { name, model, price } = req.body;
        const car = new Car({
            name,
            model,
            price,
            owner: req.user.id
        });

        await car.save();
        res.status(201).json(car);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find({ owner: req.user.id });
        res.status(200).json(cars);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

const getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ msg: 'Car not found' });
        }
        res.status(200).json(car);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

const updateCar = async (req, res) => {
    try {
        const { name, model, price } = req.body;
        let car = await Car.findById(req.params.id);

        if (!car) {
            return res.status(404).json({ msg: 'Car not found' });
        }

        if (car.owner.toString() !== req.user.id) {
            return res.status(403).json({ msg: 'You are not authorized to update this car' });
        }

        car.name = name || car.name;
        car.model = model || car.model;
        car.price = price || car.price;

        await car.save();
        res.status(200).json(car);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

const deleteCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);

        if (!car) {
            return res.status(404).json({ msg: 'Car not found' });
        }

        if (car.owner.toString() !== req.user.id) {
            return res.status(403).json({ msg: 'You are not authorized to delete this car' });
        }

        await car.remove();
        res.status(200).json({ msg: 'Car removed' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

module.exports = {
    createCar,
    getAllCars,
    getCarById,
    updateCar,
    deleteCar
};
