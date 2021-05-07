export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBookAction = book => ({
  type: CREATE_BOOK,
  book,
});

export const deleteBookAction = book => ({
  type: REMOVE_BOOK,
  book,
});
