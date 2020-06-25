import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_OFFERS } from '../../store/slices/offers';
import OfferCard from './OfferCard';
import { statusChanged } from '../../store/slices/offers';

const Offers = () => {
  const dispatch = useDispatch();
  const offers = useSelector(state => state.offers.data);
  const status = useSelector(state => state.offers.status);

  useEffect(() => {
    dispatch(LOAD_OFFERS({}));
  }, [dispatch]);

  return (
    <section id="offers">
      <header>
        <h1 className="pageTitle">Offers</h1>
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
