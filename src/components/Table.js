import React, { useContext, useState, useEffect } from 'react';
import MyContext from '../context/planetsContex';

function Table() {
  const { planets, filter } = useContext(MyContext);
  const [filterPlanets, setFilterPlanets] = useState([]);

  // função do filtro usada direto no useEffect
  useEffect(() => {
    const filterNames = planets.filter((planet) => (
      planet.name.includes(filter.filterByName.name)));
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
