import axios from "axios";

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const FETCH_MESSAGES_START = 'FETCH_MESSAGES_START';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

const fetchMessagesStart = () => ({
  type: FETCH_MESSAGES_START
})

const fetchMessagesSuccess = payload => ({
  type: FETCH_MESSAGES_SUCCESS,
  payload
})

const fetchMessagesFailure = () => ({
  type: FETCH_MESSAGES_FAILURE
})

export const fetchMessages = (token) => {
  
  return async (dispatch) => {
    try {
      dispatch(fetchMessagesStart());
      const data = await axios.get(
        'https://api.arraio.pl/api/client/message/list', {
          headers: { 'Authorization':  `Bearer ${ token }` }
        }
      )
      dispatch(fetchMessagesSuccess(data.data));
    } catch(e) {
      dispatch(fetchMessagesFailure())
    }
  }
}