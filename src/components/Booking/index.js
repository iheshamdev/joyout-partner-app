import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_RESERVATIONS } from '../../store/slices/reservations';
import ReservationCard from '../shared/ReservationCard';
// import './style.scss';

const Booking = () => {
  const dispatch = useDispatch();
  const reservations = useSelector(state => state.reservations);

  useEffect(() => {
    dispatch(LOAD_RESERVATIONS());
  }, [dispatch]);

  return (
    <section id="booking">
      <h1 className="pageTitle">Booking</h1>
      <div className="mainContainer">
        {reservations.list.length > 0 ? (
          reservations.list.map(itm => (
            <ReservationCard data={itm} key={itm.id} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default Booking;
