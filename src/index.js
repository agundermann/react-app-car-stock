import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './data.json';
import filterCars from './filter-cars';
import './index.css';

ReactDOM.render(
  <App carStock={data.carStock} filterFn={filterCars} />,
  document.getElementById('root')
);
