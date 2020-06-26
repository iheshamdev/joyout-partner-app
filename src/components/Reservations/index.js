import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_RESERVATIONS } from '../../store/slices/reservations';
import ReservationCard from '../shared/ReservationCard';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import formatedDate from '../../helper/formatedDate';

const Reservations = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const reservations = useSelector(state => state.reservations);

  useEffect(() => {
    dispatch(
      LOAD_RESERVATIONS({ status: 'confirmed', date: formatedDate(date) })
    );
  }, [date, dispatch]);

  return (
    <section id="reservations">
      <header>
        <h1 className="pageTitle">Reservations</h1>
      </header>
      <div className="mainContainer">
        <DatePicker selected={date} onChange={date => setDate(date)} />
        {reservations.loading && <p>Loading...</p>}
        {!reservations.loading && reservations.list.length === 0 && (
          <p>No Reservations for this day! pick another day</p>
        )}
        {!reservations.loading &&
          reservations.list.length > 0 &&
          reservations.list.map(itm => (
            <ReservationCard data={itm} key={itm.id} />
          ))}
      </div>
    </section>
  );
};

export default Reservations;
