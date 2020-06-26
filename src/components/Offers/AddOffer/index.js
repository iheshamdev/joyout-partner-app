import React, { useState } from 'react';
import FormField from '../../shared/FormField';
import DatePicker from 'react-datepicker';
import ImgUploader from '../../shared/ImgUploader';

const AddOffer = () => {
  const [offerType, setOfferType] = useState('discount');
  const [titleAr, setTitleAr] = useState({
    name: 'titleAr',
    label: 'Offer Title (AR)',
    value: '',
    regExp: '.{4,}',
    errMsg: 'At least 4 chars',
    handleChange: value => setTitleAr({ ...titleAr, value }),
  });
  const [titleEn, setTitleEn] = useState({
    name: 'titleEn',
    label: 'Offer Title (En)',
    value: '',
    regExp: '.{4,}',
    errMsg: 'At least 4 chars',
    handleChange: value => setTitleEn({ ...titleEn, value }),
  });
  const [valueId, setValueId] = useState({
    name: 'valueId',
    label: 'Value',
    value: '',
    regExp: '.{1,}',
    errMsg: 'Use numbers only',
    handleChange: value => setValueId({ ...valueId, value }),
  });
  const [capacity, setCapacity] = useState({
    name: 'capacity',
    label: 'Capacity (per day)',
    value: '',
    regExp: '.{1,}',
    errMsg: 'Use numbers only',
    handleChange: value => setCapacity({ ...capacity, value }),
  });
  const [startsAt, setStartsAt] = useState(null);
  const [endsAt, setEndsAt] = useState();

  return (
    <section id="offers">
      <header className="flex justify-between align-center">
        <h1 className="pageTitle">Add New Offer</h1>
      </header>
      <div className="mainContainer">
        <form>
          <div className="offerType">
            <label className="mainLabel">Offer type</label>
            <div className="options flex">
              <button
                type="button"
                className={offerType === 'discount' ? 'active' : ''}
                onClick={() => setOfferType('discount')}
              >
                Discount
              </button>
              <button
                type="button"
                className={offerType === 'general' ? 'active' : ''}
                onClick={() => setOfferType('general')}
              >
                General
              </button>
            </div>
          </div>
          {[titleAr, titleEn, valueId, capacity].map((field, i) => (
            <FormField
              key={i}
              name={field.name}
              label={field.label}
              regExp={field.regExp}
              errMsg={field.errMsg}
              value={field.value}
              handleChange={e => field.handleChange(e.target.value)}
            />
          ))}
          <div className="startsAt">
            <label className="mainLabel">Starts At</label>
            <DatePicker
              selected={startsAt}
              placeholderText="Click to select a date"
              onChange={date => setStartsAt(date)}
            />
          </div>
          <div className="endsAt">
            <label className="mainLabel">Ends At</label>
            <DatePicker
              selected={endsAt}
              placeholderText="Click to select a date"
              onChange={date => setEndsAt(date)}
            />
          </div>

          <button type="submit" className="btn mainBtn">
            Add Offer
          </button>

          {/* <ImgUploader /> */}

          {/* <div className="imgUploader">
            <input type="file" id="id" />
            <label className="mainLabel">Image Ar</label>
            <div className="imgUploader_box">
              <div className="imgUploader_upload">
                <p>Upload images only</p>
                <button type="button" className="btn mainBtn">
                  
                  Upload Image
                </button>
              </div>
            </div>
          </div> */}
        </form>
      </div>
    </section>
  );
};

export default AddOffer;
