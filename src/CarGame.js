const Car = require('./Car');

class CarGame {
  #cars;

  constructor() {
    this.#cars = [];
  }

  addCars(names) {
    names.forEach((name) => {
      const car = new Car(name);
      this.#cars.push(car);
    });
  }
}

module.exports = CarGame;
