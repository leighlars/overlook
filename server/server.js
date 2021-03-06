const users =  require('../server/users.js');
const rooms = require('../server/rooms.js');
const bookings = require('../server/bookings.js');
const user = require('../server/rooms.js');

const express = require('express');

const app = express();

app.set('port', process.env.port || 8080);

app.use(express.json());

app.locals.title = 'Overlook';

app.locals.users = users;
app.locals.rooms = rooms;
app.locals.bookings = bookings;
app.locals.user = user;

app.get('/api/v1/users', (req, resp) => {
  resp.status(200).json(app.locals.users);
});

app.get('/api/v1/users/:id', (req, resp) => {
  const { id } = req.params;

  const getUserById = app.locals.users.filter(user => user.id === +id)
  resp.status(200).json(getUserById);
})

app.get('/api/v1/bookings', (req, resp) => {
  resp.status(200).json(app.locals.bookings);
});

app.get('/api/v1/bookings/:id', (req, resp) => {
  const { id } = req.params;

  const getBookingById = app.locals.bookings.filter(booking => booking.id === +id)
  resp.status(200).json(getBookingById);
})

app.post('/api/v1/bookings', (req, resp) => {
  const requiredProp = ["userID", "date", "roomNumber"];
  const recievedProp = Object.keys(req.body);

  for (let prop of requiredProp) {
    if (!recievedProp.includes(prop)) {
      return resp.status(418).json({ error: `You're a little tea pot, add ${prop}` })
    }
  }

  const newBooking = {
    ...req.body,
    id: Date.now()
  }

  app.locals.whitewater.push(newBooking);
  return resp
    .status(201)
    .json({ booking: newBooking});
})

app.delete('/api/v1/bookings/:id', (req, resp) => {
  const { id } = req.params;
  const destroyBooking = app.locals.bookings.find(booking => booking.id === id);
  if (!destroyBooking) {
    return resp.status(404).json({ errorMessage: `Cannot find any booking with id of ${id}`})
  }
  app.locals.bookings.filter(booking => booking.id !== id);
  resp.sendStatus(204);
})

app.listen(app.get('port'), () => console.log(`Now taking reservations at ${app.locals.title}, server doing stuff on port ${app.get('port')}!`));