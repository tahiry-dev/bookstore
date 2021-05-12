import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../actions/index';

function CategoryFilter({ handleFilterChange }) {
    return (
        <div className="selectBox">
            <select name="filter" id="filter" onChange={(e) => { handleFilterChange(e.target.value); }}>
                <option value="All">All</option>
                {
                    categories.map((item) => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))
                }
            </select>
        </div>
    );
}

export default CategoryFilter;

CategoryFilter.propTypes = {
    handleFilterChange: PropTypes.func.isRequired,
};