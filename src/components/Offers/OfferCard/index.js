import React from 'react';
import './style.scss';
import usersIcon from '../../../img/icons/users.svg';

const OfferCard = props => {
  const { titleEn, dayCapacity, value } = props.data;

  return (
    <div className="offer_card">
      <div className="offer_card--title">{titleEn}</div>
      <div className="offer_card--body flex align-center justify-between">
        <div className="details flex align-center">
          <div className="users flex align-center">
            <img src={usersIcon} alt="users icon" />
            {dayCapacity | 0}
          </div>
          <div className="discount">{value.nameEn}</div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
