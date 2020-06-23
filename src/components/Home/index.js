import React from 'react';
import './style.scss';
import Stats from './Stats';

const Home = () => {
  return (
    <section id="home">
      <h1 className="pageTitle">Home</h1>
      <div className="mainContainer">
        <Stats />
      </div>
    </section>
  );
};

export default Home;
