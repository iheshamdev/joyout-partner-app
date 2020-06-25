import React from 'react';
import './style.scss';
import usersIcon from '../../../img/icons/users.svg';
import checkIcon from '../../../img/icons/check.svg';
import xIcon from '../../../img/icons/x.svg';
import { useDispatch } from 'react-redux';
import { CHANGE_RESERVATION_STATUS } from '../../../store/slices/reservations';

const ReservationCard = props => {
  const dispatch = useDispatch();
  const name = props.data.user.firstName + ' ' + props.data.user.lastName;

  console.log(props);

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
        <div className="date">{props.data.timeslot.nameEn}</div>
      </div>
      {props.showBtns && (
        <div className="reservation_card--actions flex flex-center">
          <img
            src={xIcon}
            alt="x icon"
            onClick={() =>
              dispatch(CHANGE_RESERVATION_STATUS(props.data.id, 'no_show_up'))
            }
          />
          <img
            src={checkIcon}
            alt="Check icon"
            onClick={() =>
              dispatch(CHANGE_RESERVATION_STATUS(props.data.id, 'attended'))
            }
          />
        </div>
      )}
    </div>
  );
};

export default ReservationCard;
