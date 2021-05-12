import React from 'react';
import PropTypes from 'prop-types';
import { Categories } from '../actions/index';

function CategoryFilter({ handleFilterChange }) {
  return (
    <div className="filterCategories">
      <label htmlFor="filter">
        Filter Category
        <select name="filter" id="filter" onChange={e => { handleFilterChange(e.target.value); }}>
          <option value="All">All</option>
          {
            Categories.map(item => (
              <option value={item} key={item}>
                {item}
              </option>
            ))
          }
        </select>
      </label>
    </div>
  );
}

export default CategoryFilter;

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
