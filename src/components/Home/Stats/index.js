import React, { useEffect } from 'react';
import reservationIcon from '../../../img/icons/reservation.svg';
import usersIcon from '../../../img/icons/users.svg';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_STATS } from '../../../store/slices/stat';

const Stats = () => {
  const dispatch = useDispatch();
  const stat = useSelector(state => state.stat);

  useEffect(() => {
    dispatch(LOAD_STATS());
  }, []);

  return (
    <div className="stats">
      <h4>Stats</h4>
      <div className="statsCard">
        {stat.loading ? (
          'loading...'
        ) : (
          <ul>
            <li>
              <div className="statsType">Today</div>
              <div className="bookings">
                <img src={reservationIcon} alt="Booking icon" />
                {stat.data.todayReservations | 0}
              </div>
              <div className="users">
                <img src={usersIcon} alt="users icon" />
                {stat.data.todaySeats | 0}
              </div>
            </li>
            <li>
              <div className="statsType">Total</div>
              <div className="bookings">
                <img src={reservationIcon} alt="Booking icon" />
                {stat.data.totalReservations | 0}
              </div>
              <div className="users">
                <img src={usersIcon} alt="users icon" />
                {stat.data.totalSeats | 0}
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Stats;
