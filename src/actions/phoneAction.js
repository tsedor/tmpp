import axios from "axios";

export const FETCH_PHONES = 'FETCH_PHONES';
export const FETCH_PHONES_START = 'FETCH_PHONES_START';
export const FETCH_PHONES_SUCCESS = 'FETCH_PHONES_SUCCESS';
export const FETCH_PHONES_FAILURE = 'FETCH_PHONES_FAILURE';

const fetchPhonesStart = () => ({
  type: FETCH_PHONES_START
})

const fetchPhonesSuccess = payload => ({
  type: FETCH_PHONES_SUCCESS,
  payload
})

const fetchPhonesFailure = () => ({
  type: FETCH_PHONES_FAILURE
})

export const fetchPhones = (token) => {
  
  return async (dispatch) => {
    try {
      dispatch(fetchPhonesStart());
      const data = await axios.get(
        'https://api.arraio.pl/api/client/phone-call-request/list', {
          headers: { 'Authorization':  `Bearer ${ token }` }
        }
      )
      dispatch(fetchPhonesSuccess(data.data));
    } catch(e) {
      dispatch(fetchPhonesFailure())
    }
  }
}