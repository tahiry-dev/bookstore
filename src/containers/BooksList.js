import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { deleteBookAction } from '../actions/index';

function BooksList({ booksList, deleteBookAction }) {
  const handleRemoveBook = book => {
    deleteBookAction(book);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>title</th>
            <th>category</th>
            <th className="heading_table">Remove Book</th>
          </tr>
        </thead>
        <tbody>
          {booksList && booksList.length
            ? booksList.map(item => (
              <Book
                key={item.id}
                book={item}
                handleRemoveBook={handleRemoveBook}
              />
            ))
            : 'No Books! '}
        </tbody>
      </table>
    </>
  );
}

const mapStateToProps = state => ({ booksList: state.booksList });

const mapDispatchToProps = dispatch => (
  {
    deleteBookAction: book => {
      dispatch(deleteBookAction(book));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

BooksList.propTypes = {
  booksList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  deleteBookAction: PropTypes.func.isRequired,
};
