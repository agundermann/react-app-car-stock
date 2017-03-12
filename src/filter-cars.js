function matches(car, subQuery) {
  if (subQuery.startsWith('<')) {
    const max = parseInt(subQuery.slice(1), 10);
    if (isNaN(max)) {
      return false;
    }
    return car.price < max;
  }

  if (subQuery.startsWith('>')) {
    const min = parseInt(subQuery.slice(1), 10);
    if (isNaN(min)) {
      return false;
    }
    return car.price > min;
  }

  if (car.type.toLowerCase().includes(subQuery)) {
    return true;
  }

  if (car.color.toLowerCase().includes(subQuery)) {
    return true;
  }

  if (('' + car.price).includes(subQuery)) {
    return true;
  }

  return false;
}

export default function filterCars(cars, query) {
  const lcQuery = query.trim().toLowerCase();
  const subQueries = lcQuery.split(' ');

  return cars.filter(car => {
    // for-loop to exit early
    for (let i = 0; i < subQueries.length; i++) {
      if (!matches(car, subQueries[i])) {
        return false;
      }
    }

    return true;
  });
}
