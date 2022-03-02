import React, { useContext } from 'react';
import MyContext from '../context/planetsContex';

function SearchInput() {
  // useContext deu erro, resolvido apartir do link https://reactjs.org/docs/hooks-reference.html#usecontext
  const { searchName } = useContext(MyContext);

  return (
    <form onSubmit={ (e) => e.preventDefault() }>
      <label htmlFor="name-input">
        <input
          data-testid="name-filter"
          type="text"
          name="searchPlanets"
          id="searchPlanets"
          placeholder="Search Planets"
          onChange={ searchName }
        />
      </label>
    </form>
  );
}

export default SearchInput;
