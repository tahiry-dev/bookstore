import { createStore } from 'redux';
import rootReducer from './reducers/index';

const initialState = {

  booksList: [
    {
      id: Math.random(),
      title: 'The Hunger Games',
      category: 'Action',
    },
    {
      id: Math.random(),
      title: 'Dune',
      category: 'Sci-Fi',
    },
    {
      id: Math.random(),
      title: 'The Great Gatsby',
      category: 'History',
    },
  ],
};

const store = createStore(rootReducer, initialState);

export default store;
