import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilters';
import { deleteBookAction, filterBookAction } from '../actions/index';

const BooksList = ({
  booksList, deleteBookAction, filterBookAction,
}) => {
  const handleRemoveBook = book => {
    deleteBookAction(book);
  };

  const handleFilterChange = filter => {
    filterBookAction(filter);
  };

  return (
    <>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <div className="book_details">
        {booksList && booksList.length
          ? booksList.map(item => (
            <Book
              key={item.id}
              book={item}
              handleRemoveBook={handleRemoveBook}
            />
          ))
          : (<div className="noBook">Sorry, currently there are no books in such category </div>)}
      </div>
    </>
  );
};

const filterBooksByCategory = state => {
  const { booksList, filter } = state;
  if (filter !== 'All') {
    return booksList.filter(book => (book.category === filter));
  }
  return booksList;
};

const mapStateToProps = state => ({ booksList: filterBooksByCategory(state) });

const mapDispatchToProps = dispatch => (
  {
    deleteBookAction: book => {
      dispatch(deleteBookAction(book));
    },
    filterBookAction: filter => {
      dispatch(filterBookAction(filter));
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
  filterBookAction: PropTypes.func.isRequired,
};
