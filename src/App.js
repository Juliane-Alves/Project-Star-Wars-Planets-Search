import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import Search from './components/Search';
import FilterValue from './components/FilterValue';

function App() {
  return (
    <div>
      <h1>Star Wars planets</h1>
      <Provider>
        <Search />
        <FilterValue />
        <Table />
      </Provider>
    </div>
  );
}

export default App;

// Començando projeto, foco!;
