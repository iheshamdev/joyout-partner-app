import React from 'react';
import './style.scss';
import Stats from './Stats';
import TodayBooking from './TodayBooking';

const Home = () => {
  return (
    <section id="home">
      <h1 className="pageTitle">Home</h1>
      <div className="mainContainer">
        <Stats />
        <TodayBooking />
      </div>
    </section>
  );
};

export default Home;
