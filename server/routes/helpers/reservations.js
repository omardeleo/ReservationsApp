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
  // i think the easiest simple way to parse it is to go use split to remote the parts we don't need
  // another way might be regex
  let message_parse = message.Body.split("Reservation for ")[1].split(" at ");
  let name = message_parse[0];
  let phoneNumber = message.From;
  // we need to figure out the time in 24 hour format for the time
  let time = message_parse[2];
  // TODO: need to fix to include minutes
  if(time.toLowerCase().includes("pm")){
    time = (parseInt(time.substring(0, time.length - 2)) + 12) % 24;
  }
  // just assume else is "AM" and later check if date is valid just to not waste steps (plus we have function to validate)
  else {
    time = time.substring(0, time.lenght - 2);
  }
  let dateTime = new Date(`${message_parse[1]} ${time}:00`);
  let reservation = {
    name: name,
    dateTime: dateTime,
    duration: '1 hour',
    phoneNumber: phoneNumber,
    createdAt: new Date(),
    rawJson: message,
    restaurantId: 1
  }
  return reservation;
}

// validates if can reserve for give reservationObj (given by parseTextMessage);
function validateReservation(reservationObj, restaurantObj) {
  return true;
}

module.exports = { parseTextMessage, validateReservation }
