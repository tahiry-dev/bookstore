import { combineReducers } from 'redux';
import booksList from './book';

const rootReducer = combineReducers({
  booksList,
});

export default rootReducer;
