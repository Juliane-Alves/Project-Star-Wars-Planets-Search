import React, { useContext, useState } from 'react';
import MyContext from '../context/planetsContex';

function FilterValue() {
  const { setFilter } = useContext(MyContext);
  const [columns, setColumns] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']); // Colunas dada pelo README.
  const comparisonFilter = ['maior que', 'menor que', 'igual a']; // Filtros de comparação disponiveis no README.
  const [inputColumn, setInputColumn] = useState('population'); // valor inicial setado 'population'
  const [inputComparison, setInputComparison] = useState('maior que'); // valor inicial setado 'maior que'
  const [inputValue, setValueInput] = useState(0); // 0 é o valor inicial.

  const filterButton = () => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      filterByNumericValues: [...prevFilter.filterByNumericValues, {
        columns: inputColumn,
        comparisonFilter: inputComparison,
        value: inputValue }],
    }));
    setValueInput('');
    setColumns(columns.filter((selected) => selected !== inputColumn)); // verificação pra não repetir filtro
  };

  return (
    <form>
      <label htmlFor="column-filter">
        <select
          data-testid="column-filter"
          id="column-filter"
          onChange={ ({ target }) => setInputColumn(target.value) } // Vai pegar o valor escolhido da coluna.
        >
          { columns.map((option) => (
            <option key={ option }>{ option }</option>
          )) }
        </select>
      </label>

      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          onChange={ ({ target }) => setInputComparison(target.value) } // Seleção do valor escolhido
        >
          { comparisonFilter.map((option) => (
            <option key={ option }>{ option }</option>
          )) }
        </select>
      </label>

      <label htmlFor="value-filter">
        <input
          data-testid="value-filter"
          type="number"
          id="value-filter"
          value={ inputValue }
          onChange={ ({ target }) => setValueInput(target.value) } // "pega" o valor numerico
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ filterButton }
      >
        Filtrar
      </button>
    </form>
  );
}
export default FilterValue;
