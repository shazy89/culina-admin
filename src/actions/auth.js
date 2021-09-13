import api from '../utils/api';
import {
  LOGIN_SUCCESS,
  USER_LOADED,
  //  CLEAR_PROFILE,
  LOADING,
  LOGOUT,
  //  LOGIN_FAIL,
} from './types';
import { setAlert } from './alert';

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    //  dispatch({
    //    type: AUTH_ERROR,
    //  });
  }
};
// Login User
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    dispatch({
      type: LOADING,
      payload: true,
    });
    const res = await api.post('auth/signin', body);

    await localStorage.setItem('token', res.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch({
      type: LOADING,
      payload: false,
    });
    dispatch(loadUser());
  } catch (err) {
    console.error(err);
    let error = err.response.data.error;

    if (error) {
      dispatch(setAlert(error, 'danger'));
    }
  }
};

// LOGOUT

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  // history.push("/");
};
