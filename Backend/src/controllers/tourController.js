const Tour = require("../models/tourModel");

const getAllTours = async (req, res) => {

    try {

        const tours = await Tour.getAllTours();

        res.json(tours);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    getAllTours
};