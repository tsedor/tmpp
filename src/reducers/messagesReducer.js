import { FETCH_MESSAGES_SUCCESS } from '../actions/messageAction';

const initialState = [];

const messagesReducer = (state = initialState, action) => {

  switch(action) {
    case FETCH_MESSAGES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default messagesReducer;