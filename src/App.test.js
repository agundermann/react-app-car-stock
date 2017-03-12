import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';

const data = [
  {
    "color": "red",
    "type": "Porsche 911",
    "yearOfConstruction": 2000,
    "price": 60000
  },
  {
    "color": "black",
    "type": "Porsche Panamera",
    "yearOfConstruction": 2010,
    "price": 120000
  },
  {
    "color": "green",
    "type": "VW Beetle",
    "yearOfConstruction": 1960,
    "price": 8000,
    "notes": "damaged at the front bumper"
  },
];

it('renders to DOM without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App carStock={data} filterFn={cars => cars}/>, div);
});

describe('by default', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<App carStock={data} filterFn={cars => cars}/>);
  });

  it('renders an empty text input', () => {
    const input = wrapper.find('input[type="text"]');
    expect(input.exists()).toBe(true);
    expect(input.props().value).toBe('');
  });

  it('renders all car types in a table', () => {
    const tbody = wrapper.find('table tbody');
    const rows = tbody.find('tr');

    expect(tbody.exists()).toBe(true);
    expect(rows).toHaveLength(3);
    data.forEach((car, i) => {
      const row = shallow(rows.get(i));
      return expect(row.text()).toContain(car.type);
    });
  });
});

describe('when changing the text input', () => {
  let wrapper = null;
  let filterSpy = jest.fn(cars => [cars[2]]);

  beforeEach(() => {
    wrapper = shallow(<App carStock={data} filterFn={filterSpy}/>);
    wrapper.find('input[type="text"]').simulate('change', {target: {value: 'red'}});
  });

  it('calls the filter function with the right arguments', () => {
    expect(filterSpy).toHaveBeenCalledTimes(1);
    expect(filterSpy).toHaveBeenLastCalledWith(data, 'red');
  });

  it('renders the result of the filter fn in the table', () => {
    const tbody = wrapper.find('table tbody');
    const rows = tbody.find('tr');

    expect(tbody.exists()).toBe(true);
    expect(rows).toHaveLength(1);
    expect(shallow(rows.get(0)).text()).toContain('VW Beetle');
  });
});
