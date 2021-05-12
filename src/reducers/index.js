import { combineReducers } from 'redux';
import booksList from './book';
import filter from './filters';

const rootReducer = combineReducers({
  booksList, filter,
});

export default rootReducer;
