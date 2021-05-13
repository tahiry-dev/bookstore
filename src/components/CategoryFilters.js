import React from 'react';
import PropTypes from 'prop-types';
import PersonIcon from '@material-ui/icons/Person';
import { Categories } from '../actions/index';

const CategoryFilter = ({ handleFilterChange }) => (
  <div className="navigation">
    <div className="navigation_logo">
      <span>Bookstore CMS</span>
    </div>
    <div className="nav_filter">
      <p>Books</p>
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
    </div>
    <div className="icon">
      <PersonIcon />
    </div>
  </div>
);
export default CategoryFilter;

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
