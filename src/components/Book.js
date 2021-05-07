import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, handleRemoveBook }) {
  const {
    id,
    title,
    category,
  } = book;

  return (
    <tr>
      <td className="element">{id}</td>
      <td className="element">{title}</td>
      <td className="element">{category}</td>
      <td>
        <button
          className="delete-element"
          type="button"
          onClick={() => handleRemoveBook(book)}
        >
          Delete Book
        </button>
      </td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
