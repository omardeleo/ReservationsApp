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
    dateTime: dateTime.toString(),
    duration: '1 hour',
    phoneNumber: phoneNumber,
    createdAt: new Date().toString(),
    rawJson: message,
    restaurantId: 1
  }
  return reservation;
}

// validates if can reserve for give reservationObj (given by parseTextMessage);
// TODO: there is an issue if closing time is midnight then it should set the date to the next day, right now it will return false because it is set to todays date. might not be a big deal though
function validateReservation(reservationObj, restaurantObj) {
  let reservationDateObj = new Date(reservationObj.dateTime);
  let reservationDate = new Date().setHours(reservationDateObj.getHours(), reservationDateObj.getMinutes());
  // for open and close time we assume only given time and not date
  let openTimeHours = restaurantObj.opensAt.split(':');
  let openTime = new Date().setHours(openTimeHours[0], openTimeHours[1]);
  let closingTimeHours = restaurantObj.closestAt.split(':');
  let closingTime = new Date().setHours(closingTimeHours[0], closingTimeHours[1]);
  // first check date is valid
  if(!reservationDate) return false;
  // then check if time is in between
  return openTime < reservationDate && closingTime > reservationDate
}

module.exports = { parseTextMessage, validateReservation }
