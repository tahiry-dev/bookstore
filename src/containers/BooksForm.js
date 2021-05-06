import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

function BooksForm() {
  return (
    <form>
      <input type="text" name="title" />

      <select name="category" id="category">
        {
          categories.map(item => (
            <option value={item} key={item}>
              {item}
            </option>
          ))
        }
      </select>

      <button type="submit">Submit</button>

    </form>
  );
}

export default BooksForm;
