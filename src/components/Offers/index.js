import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_OFFERS } from '../../store/slices/offers';
import OfferCard from './OfferCard';
import { statusChanged } from '../../store/slices/offers';
import { Link } from 'react-router-dom';

const Offers = () => {
  const dispatch = useDispatch();
  const [offers, status] = useSelector(state => [
    state.offers.data,
    state.offers.status,
  ]);

  useEffect(() => {
    dispatch(LOAD_OFFERS({}));
  }, [dispatch]);

  return (
    <section id="offers">
      <header className="flex justify-between align-center">
        <h1 className="pageTitle">Offers</h1>
        <Link to="/offers/add">
          <button className="btn basic-btn">Add</button>
        </Link>
      </header>
      <div className="mainContainer">
        <div className="tabs flex align-center">
          <div
            className={status === 'active' ? 'tab active' : 'tab'}
            onClick={() => dispatch(statusChanged({ status: 'active' }))}
          >
            Active
          </div>
          <div
            className={status === 'hold' ? 'tab active' : 'tab'}
            onClick={() => dispatch(statusChanged({ status: 'hold' }))}
          >
            Hold
          </div>
        </div>
        {offers[status].map(itm => (
          <OfferCard data={itm} key={itm.id} />
        ))}
      </div>
    </section>
  );
};

export default Offers;
