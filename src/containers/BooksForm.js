import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBookAction, Categories } from '../actions/index';

const BooksForm = props => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');
  const id = Math.random();

  const handleChangeTitle = event => {
    setTitle(
      event.target.value,
    );
  };

  const handleChangeCategory = event => {
    setCategory(
      event.target.value,
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    const book = {
      id,
      title,
      category,
    };
    props.addBookAction(book);
    setTitle('');
    setCategory('Action');
  };

  return (
    <div className="form_container">
      <h3>Add New Book</h3>
      <form className="form">
        <input className="form_input" placeholder="Book title" type="text" name="title" value={title} onChange={handleChangeTitle} />

        <select className="form_select" name="category" id="category" value={category} onChange={handleChangeCategory}>
          {
            Categories.map(item => (
              <option value={item} key={item}>
                {item}
              </option>
            ))
          }
        </select>

        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addBookAction: book => {
    dispatch(addBookAction(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);

BooksForm.propTypes = {
  addBookAction: PropTypes.func.isRequired,
};
