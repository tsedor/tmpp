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

export const get = (uri, data) => {
  return async (dispatch) => {
    try {
      dispatch(fetchMessagesStart());
      const response = await axios.get(uri, data)
      dispatch(fetchMessagesSuccess(response.data));
    } catch(e) {
      dispatch(fetchMessagesFailure())
    }
  }
}

export const post = (uri, data) => {
  return async (dispatch) => {
    try {
      dispatch(fetchMessagesStart());
      const response = await axios.post(uri, data)
      dispatch(fetchMessagesSuccess(response));
    } catch(e) {
      dispatch(fetchMessagesFailure())
    }
  }
}