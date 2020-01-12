const express = require('express');
const pool = require('../db.js');

const router = express.Router();


router.post('/', (req, res) => {
  const availableRooms = [];
  const { startDate } = req.body;
  const { endDate } = req.body;
  const currDate = new Date();

  if (new Date(startDate) < currDate || new Date(endDate) < startDate) {
    res.status(400).json({
      error: true,
      message: 'Incorrect dates entered',
    });
  } else {
    const query = `SELECT room_number FROM room_status WHERE (booking_start_date IS NULL || (booking_start_date > "${startDate}" 
      && booking_start_date > "${endDate}") || (booking_end_date < "${startDate}" && booking_end_date < "${endDate}"))`;

    console.log(query);
    pool.query(query, (err, rows) => {
      if (err) {
        console.log(err);
        res.json({
          error: true,
          message: `Error occurred ${err}`,
        });
      } else {
        console.log('The solution is: ', JSON.stringify(rows));

        const rooms = JSON.parse(JSON.stringify(rows));

        rooms.forEach((room) => {
          availableRooms.push(room.room_number);
        });

        console.log(availableRooms);
        res.json({
          error: false,
          available_rooms: availableRooms,
        });
      }
    });
  }
});

module.exports = router;
