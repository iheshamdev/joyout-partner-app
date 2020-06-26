import './style.scss';
import React, { useState } from 'react';

const FormField = props => {
  const [valid, setValid] = useState(true);
  const {
    name,
    required,
    type,
    placeholder,
    label,
    regExp,
    errMsg,
    handleChange,
    value,
  } = props;

  const onBlur = event => {
    setValid(event.target.checkValidity());
  };

  return (
    <div className="formGroup">
      <label className="mainLabel">{label}</label>
      <div className={!valid ? 'formField invalid' : 'formField'}>
        <input
          id={name}
          name={name}
          required={required ? true : false}
          type={type ? type : 'text'}
          placeholder={placeholder ? placeholder : ''}
          pattern={regExp ? regExp : ''}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          autoComplete="off"
        />
        <div className="fieldUnderline"></div>
      </div>
      {!valid && (
        <small className="errMsg">
          {value.trim().length > 0 && errMsg ? errMsg : 'REQUIRED FIELD'}
        </small>
      )}
    </div>
  );
};

export default FormField;
