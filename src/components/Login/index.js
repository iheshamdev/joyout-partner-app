import './style.scss';
import React, { useState, useEffect } from 'react';
import FormField from '../shared/FormField';
import { useDispatch, connect } from 'react-redux';
import { LOG_IN } from '../../store/slices/auth';
import { useHistory } from 'react-router-dom';
import getAccessToken from '../../helper/getAccessToken';

const Login = props => {
  const [username, setUsername] = useState({
    name: 'username',
    required: true,
    regExp: '.{2,}',
    type: 'text',
    label: 'Username',
    placeholder: 'John doe',
    value: 'test2',
    errMsg: 'At least 2 Chars',
  });
  const [password, setPassword] = useState({
    name: 'password',
    required: true,
    regExp: '.{6,}',
    type: 'password',
    label: 'Password',
    placeholder: 'Type your password',
    value: '12345678',
    errMsg: 'At least 6 Chars',
  });
  const [btnActive, setBtnActive] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = props.user;

  if (getAccessToken() !== false) history.push('/');

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      // alert('Form Submitted');
      let data = {
        strategy: 'local',
        username: username.value,
        password: password.value,
      };
      dispatch(LOG_IN(data));
    }
  };

  useEffect(() => {
    if (
      username.value.match(username.regExp) &&
      password.value.match(password.regExp)
    ) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  }, [username.value, username.regExp, password.value, password.regExp]);

  useEffect(() => {
    if (Object.keys(user).length !== 0) history.push('/');
  }, [history, user]);

  return (
    <form noValidate onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="formBody">
        <FormField
          name={username.name}
          required={username.required}
          type={username.type}
          placeholder={username.placeholder}
          label={username.label}
          regExp={username.regExp}
          errMsg={username.errMsg}
          value={username.value}
          handleChange={e =>
            setUsername({ ...username, value: e.target.value })
          }
        />
        <FormField
          name={password.name}
          required={password.required}
          type={password.type}
          placeholder={password.placeholder}
          label={password.label}
          regExp={password.regExp}
          errMsg={password.errMsg}
          value={password.value}
          handleChange={e =>
            setPassword({ ...password, value: e.target.value })
          }
        />
      </div>
      <div className="formActions flex justify-center">
        {!props.formLoading ? (
          <button type="submit" className="btn mainBtn" disabled={!btnActive}>
            Submit
          </button>
        ) : (
          <button type="button" className="btn" disabled>
            Checking...
          </button>
        )}
      </div>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    formLoading: state.auth.loading,
    user: state.auth.data,
  };
};

export default connect(mapStateToProps)(Login);
