import filterCars from './filter-cars';

const data = [
  // 0
  {
    "color": "red",
    "type": "Porsche 911",
    "yearOfConstruction": 2000,
    "price": 60000
  },
  // 1
  {
    "color": "black",
    "type": "Porsche Panamera",
    "yearOfConstruction": 2010,
    "price": 120000
  },
  // 2
  {
    "color": "green",
    "type": "VW Beetle",
    "yearOfConstruction": 1960,
    "price": 8000,
    "notes": "damaged at the front bumper"
  },
  // 3
  {
    "color": "blue",
    "type": "Audi A5",
    "yearOfConstruction": 1998,
    "price": 28345
  },
  // 4
  {
    "color": "yellow",
    "type": "Ferrari 430 Spider",
    "yearOfConstruction": 1990,
    "price": 80435
  },
  // 5
  {
    "color": "gray",
    "type": "Audi Commodore",
    "yearOfConstruction": 1992,
    "price": 8212
  }
];

describe('simple queries', () => {
  it('does not filter if query is empty', () => {
    const result = filterCars(data, '');

    expect(result).toEqual(data);
  });

  it('filters by type', () => {
    const result = filterCars(data, 'ferrari');

    expect(result.length).toBe(1);
    expect(result[0]).toBe(data[4]);
  });

  it('filters by color', () => {
    const result = filterCars(data, 'black');

    expect(result.length).toBe(1);
    expect(result[0]).toBe(data[1]);
  });

  it('filters by price', () => {
    const result = filterCars(data, '8212');

    expect(result.length).toBe(1);
    expect(result[0]).toBe(data[5]);
  });

  it('filters by min price', () => {
    const result = filterCars(data, '>80000');

    expect(result.length).toBe(2);
    expect(result[0]).toBe(data[1]);
    expect(result[1]).toBe(data[4]);
  });

  it('filters by max price', () => {
    const result = filterCars(data, '<80000');

    expect(result.length).toBe(4);
    expect(result[0]).toBe(data[0]);
    expect(result[1]).toBe(data[2]);
    expect(result[2]).toBe(data[3]);
    expect(result[3]).toBe(data[5]);
  });

  it('filters partial matches', () => {
    const result = filterCars(data, 'aname');

    expect(result.length).toBe(1);
    expect(result[0]).toBe(data[1]);
  });
});

describe('advanced queries', () => {
  it('filters by multiple search strings', () => {
    const result = filterCars(data, 'audi <20000');

    expect(result.length).toBe(1);
    expect(result[0]).toBe(data[5]);
  });
});
