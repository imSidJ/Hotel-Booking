/* eslint-disable import/newline-after-import */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const checkAvailability = require('./routes/checkAvailability.js');
const bookRoom = require('./routes/bookRoom.js');

// connection.connect();

app.set('port', process.env.PORT || process.argv[2] || 3000);

app.use(bodyParser.json());

app.use('/hotel/room/availability', checkAvailability);

app.use('/hotel/room/booking', bookRoom);


app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
});
