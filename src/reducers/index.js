/* eslint-disable import/extensions */
import { combineReducers } from 'redux';
import booksList from './book';
import filter from './filters';
/* eslint-enable import/extensions */

const rootReducer = combineReducers({
  booksList, filter,
});

export default rootReducer;
