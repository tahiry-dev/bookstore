import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
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
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
