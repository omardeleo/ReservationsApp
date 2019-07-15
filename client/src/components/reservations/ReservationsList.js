import React from "react";
import MediaCard from "../MediaCard";

export default class ReservationsList extends React.Component {
  render() {
    return (
      <div className="reservationlist">
        {this.props.reservations.map((res, i) => (
          <MediaCard name={res.name} date={res.dateTime} />
        ))}
      </div>
    );
  }
}
