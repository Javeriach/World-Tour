import { useEffect, useReducer } from 'react';
import styles from './LoginForm.module.css';
import { useAuth } from '../../Contexts/AuthUserProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
let reducer = (state, action) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payLoad };

    case 'password':
      return { ...state, password: action.payLoad };
    default:
      return state;
  }
};


function LoginForm() {
  let { login, logout } = useAuth();
  let naviage = useNavigate();
  let initialState = {
    email: '',
    password: '',
  };
  let [{email,password}, dispatch] = useReducer(reducer, initialState);
  let loginHandler2 = (e) => {
    e.preventDefault();
   if(login(email, password))
    naviage("/tracking/cities");
    
  };


  return (
    <div>
      <form action="" className={`text-light flex flex-column align-items-center justify-content-center ${styles.loginBox}`}>
        <h1 className='text-center text-dark'>Login</h1>
        <label htmlFor="email" className="mb-1 text-dark">
          Email Address
        </label>
        <br />
        <input
          type="email"
          onChange={(e) => dispatch({ type: 'email', payLoad: e.target.value })}
          placeholder="Enter email address"
          value={email}
        />
        <br />
        <label htmlFor="" className="mt-2 mb-1 text-dark">
          Password
        </label>
        <br />
        <input
          type="password"
          placeholder="Enter password"
          className="mt-1"
          onChange={(e) =>
            dispatch({ type: 'password', payLoad: e.target.value })
          }
          value={password}
        />
        <br />
        <button type="submit" className="ms-2 mt-3" onClick={loginHandler2}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
