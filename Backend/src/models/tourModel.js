const pool = require("../config/db");

const getAllTours = async () => {

    const result = await pool.query(
        "SELECT * FROM tours"
    );

    return result.rows;

};

module.exports = {
    getAllTours
};