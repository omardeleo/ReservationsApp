import React from 'react';

export default class ReservationsList extends React.Component {
  render() {
    return(
      <div className='reservationlist'>
        <ol>
          {this.props.reservations.map((res, i) => (
            <li key={`reservation-${i}`}>
              <span className='left'><span className='light-gray'>{i+1}.</span>  {res.name}</span>
              <span className='right light-gray'>{res.dateTime}</span>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}
