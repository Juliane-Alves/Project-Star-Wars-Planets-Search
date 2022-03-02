import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import fetchApi from '../services/fetchApi';
import MyContext from './planetsContex';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [] }); // manipular o estado no filtro de pesquisa dos planetas/ e também dos valores numericos

  // função que utiliza a API;
  async function returnPlanets() {
    const planet = await fetchApi();
    setPlanets(planet);
  }

  //  função que pode ser executada em diferentes momentos do ciclo de vida dos componentes// retirado do course;
  useEffect(() => {
    returnPlanets();
  }, []);

  // função necessaria para o filtro funcionar
  function searchName({ target }) {
    setFilter((prevFilter) => (
      { ...prevFilter, filterByName: { name: target.value } }));
  }

  return (
    <MyContext.Provider value={ { planets, searchName, filter, setFilter } }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.arrayOf(propTypes.element),
}.isRequired;

export default Provider;
