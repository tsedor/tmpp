import { combineReducers } from 'redux';

import messagesReducer from './messagesReducer';
import phonesReducer from './phonesReducer';
import loginReducer from './loginReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  messages: messagesReducer,
  token: loginReducer,
  phonesReducer,
  uiReducer
});