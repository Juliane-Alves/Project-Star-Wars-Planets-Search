import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import fetchApi from '../services/fetchApi';
import MyContext from './planetsContex';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);

  // função que utiliza a API;
  async function returnPlanets() {
    const planet = await fetchApi();
    setPlanets(planet);
  }

  //  função que pode ser executada em diferentes momentos do ciclo de vida dos componentes// retirado do course;
  useEffect(() => {
    returnPlanets();
  }, []);

  return (
    <MyContext.Provider value={ { planets } }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.arrayOf(propTypes.element),
}.isRequired;

export default Provider;
