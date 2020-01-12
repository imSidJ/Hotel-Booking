const express = require('express');
const pool = require('../db.js');

const router = express.Router();


router.post('/', (req, res) => {
  const { customerName } = req.body;
  const { roomNumber } = req.body;
  const { startDate } = req.body;
  const { endDate } = req.body;
  const currDate = new Date();

  if (startDate < currDate || endDate < startDate) {
    res.json({
      error: true,
      message: 'Incorrect dates entered',
    });
  } else {
    // Assuming that frontend is doing all the validation and only allows to select available rooms.
    // Hence not checking for room availibiliy again before insert
    const query = `UPDATE room_status SET booking_start_date = "${startDate}", booking_end_date = "${endDate}", customer_name = "${customerName}" WHERE room_number = "${roomNumber}"`;

    pool.query(query, (err) => {
      if (err) {
        // console.log(err);
        res.json({
          error: true,
          message: `Error occurred ${err}`,
        });
      } else {
        res.json({
          error: false,
          message: 'Room booked successfull',
        });
      }
    });
  }
});

module.exports = router;
