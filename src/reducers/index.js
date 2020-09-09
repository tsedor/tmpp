import { combineReducers } from 'redux';

import messagesReducer from './messagesReducer';
import phonesReducer from './phonesReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  messages: messagesReducer,
  phonesReducer,
  uiReducer
});