// should return an object
// {
//   name,
//   dateTime,
//   duration,
//   phoneNumber,
//   createdAt,
//   rawJson,
//   restaurantId
// }
// receives message which is twilio message
function parseTextMessage(message) {

}

// validates if can reserve for give reservationObj (given by parseTextMessage);
function validateReservation(reservationObj) {

}

module.exports = { parseTextMessage, validateReservation }
