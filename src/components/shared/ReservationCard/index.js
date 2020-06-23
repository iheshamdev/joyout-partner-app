import React from 'react';
import './style.scss';
import usersIcon from '../../../img/icons/users.svg';

const ReservationCard = props => {
  const name = props.data.user.firstName + ' ' + props.data.user.lastName;

  return (
    <div className="reservation_card">
      <div className="reservation_card--name">{name}</div>
      <div className="reservation_card--body flex align-center justify-between">
        <div className="details flex align-center">
          <div className="users flex align-center">
            <img src={usersIcon} alt="users icon" />
            {props.data.seatsCount | 0}
          </div>
          <div className="discount">{props.data.offer.value.nameEn}</div>
        </div>
        <div className="date">26 MAY 4 PM</div>
      </div>
    </div>
  );
};

export default ReservationCard;
