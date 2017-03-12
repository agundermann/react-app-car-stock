export default function filterCars(cars, query) {
  const lcQuery = query.toLowerCase();

  return cars.filter(car => {
    if (lcQuery.startsWith('<')) {
      const max = parseInt(lcQuery.slice(1));
      if (isNaN(max)) {
        return false;
      }
      return car.price < max;
    }

    if (lcQuery.startsWith('>')) {
      const min = parseInt(lcQuery.slice(1));
      if (isNaN(min)) {
        return false;
      }
      return car.price > min;
    }

    if (car.type.toLowerCase().includes(lcQuery)) {
      return true;
    }

    if (car.color.toLowerCase().includes(lcQuery)) {
      return true;
    }

    if (('' + car.price).includes(lcQuery)) {
      return true;
    }

    return false;
  });
}
