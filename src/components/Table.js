import React, { useContext, useState, useEffect } from 'react';
import MyContext from '../context/planetsContex';

function Table() {
  const { planets, filter } = useContext(MyContext);
  const [filterPlanets, setFilterPlanets] = useState([]);

  // estrutura para verificação das condições pedidas para filtragem
  const numericFilter = (planet, filterByNumValue) => {
    const { columns, comparisonFilter, value } = filterByNumValue;
    if (comparisonFilter === 'maior que') {
      return Number(planet[columns]) > Number(value);
    }
    if (comparisonFilter === 'menor que') {
      return Number(planet[columns]) < Number(value);
    }
    if (comparisonFilter === 'igual a') {
      return Number(planet[columns]) === Number(value);
    }
  };

  // função do filtro por nome usada direto no useEffect// também por numero de acordo com o requisito 3
  useEffect(() => {
    const filterNames = planets.filter((planet) => (
      planet.name.includes(filter.filterByName.name)
        && filter.filterByNumericValues
          .every((searchFilter) => numericFilter(planet, searchFilter))));
    setFilterPlanets(filterNames);
  }, [planets, filter]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Climate</th>
          <th>Created</th>
          <th>Diameter</th>
          <th>Edited</th>
          <th>Filmes</th>
          <th>Gravity</th>
          <th>Orbital Period</th>
          <th>Population</th>
          <th>Rotation Period</th>
          <th>Surface Water</th>
          <th>Terrain</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {filterPlanets.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.climate}</td>
            <td>{planet.created}</td>
            <td>{planet.diameter}</td>
            <td>{planet.edited}</td>
            <td>{planet.filmes}</td>
            <td>{planet.gravity}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.population}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.terrain}</td>
            <td>{planet.url}</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
