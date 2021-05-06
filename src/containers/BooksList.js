import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

function BooksList({ booksList }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>title</th>
          <th>category</th>
        </tr>
      </thead>
      <tbody>
        {booksList && booksList.length
          ? booksList.map(article => <Book key={article.id} book={article} />)
          : 'No Books! '}
      </tbody>
    </table>
  );
}

const mapStateToProps = state => ({ booksList: state.booksList });

export default connect(mapStateToProps)(BooksList);

BooksList.propTypes = {
  booksList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
};
