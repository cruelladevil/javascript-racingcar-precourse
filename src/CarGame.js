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
}

module.exports = CarGame;
