export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const Categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export const addBookAction = book => ({
  type: CREATE_BOOK,
  book,
});

export const deleteBookAction = book => ({
  type: REMOVE_BOOK,
  book,
});

export const filterBookAction = filter => ({
  type: CHANGE_FILTER,
  filter,
});
