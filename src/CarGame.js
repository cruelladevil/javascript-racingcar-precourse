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

  moveCars() {
    this.#cars.forEach((car) => car.move());
  }

  getResults() {
    return this.#cars.map((car) => car.getResult());
  }
}

module.exports = CarGame;
