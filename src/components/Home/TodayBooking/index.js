import React, { useEffect } from 'react';
import ReservationCard from '../../shared/ReservationCard';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_RESERVATIONS } from '../../../store/slices/reservations';

const TodayBooking = () => {
  const dispatch = useDispatch();
  const reservations = useSelector(state => state.reservations);

  useEffect(() => {
    dispatch(LOAD_RESERVATIONS());
  }, [dispatch]);

  return (
    <div className="todayBooking">
      <h4>Today's Booking</h4>
      {reservations.list.length > 0 ? (
        reservations.list.map(itm => (
          <ReservationCard data={itm} key={itm.id} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TodayBooking;
