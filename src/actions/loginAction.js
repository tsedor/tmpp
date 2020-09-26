import axios from "axios";

export const FETCH_LOGIN = 'FETCH_LOGIN';
export const FETCH_LOGIN_START = 'FETCH_LOGIN_START';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';
export const FETCH_LOGOUT_SUCCESS = 'FETCH_LOGOUT_SUCCESS';

const fetchLoginStart = () => ({
  type: FETCH_LOGIN_START
})

const fetchLoginSuccess = payload => ({
  type: FETCH_LOGIN_SUCCESS,
  payload
})

const fetchLoginFailure = () => ({
  type: FETCH_LOGIN_FAILURE
})

const fetchLogoutSuccess = () => ({
  type: FETCH_LOGOUT_SUCCESS
})

export const fetchLogin = (param) => {
  return async (dispatch) => {
    try {
      dispatch(fetchLoginStart());
      const response = await axios.post('https://api.arraio.pl/api/login', param)
      dispatch(fetchLoginSuccess(response.data));
    } catch(e) {
      dispatch(fetchLoginFailure())
    }
  }
}

export const fetchLogout = () => {
  return async (dispatch) => {
    dispatch(fetchLogoutSuccess())
  };
}