const Car = require('./Car');
const OutputView = require("./OutputView");

class Game {
  #cars;
  #tryCount;
  #car
  #statusObj;
  #winner = [];

  constructor() {
    this.#statusObj = {};
  }

  getWinner() {
    return this.#winner;
  }

  setStatusObject() {
    this.#cars.forEach(car => {
      this.#statusObj[car] = '';
    });
  }

  setCars(car) {
    this.#cars = car;
    this.setStatusObject();
  }

  setTryCount(count) {
    this.#tryCount = count;
    this.carMove();
  }

  carMove() {
    const blankArr = Array.from({ length: this.#tryCount }, () => []);
    blankArr.forEach(() => {
      this.produceCar();
      this.currentStatus();
    });
    this.checkAdvance();
  }

  produceCar() {
    this.#cars.forEach(car => {
      this.#car = new Car(car);
      this.#statusObj[car] += this.#car.getStatus();
    });
  }

  currentStatus() {
    const advances = Object.values(this.#statusObj);
    const blankArr = Array.from({ length: this.#cars.length });
    blankArr.forEach((value, index) => {
      OutputView.printStatus(this.#cars[index], advances[index]);
      if (blankArr.length === index + 1) OutputView.printBlank();
    });
  }

  checkAdvance() {
    const advances = Object.values(this.#statusObj);
    let scores = [];
    advances.forEach((value) => {
      scores.push(value.length);
    });
    this.setWinner(scores);
  }

  setWinner(scores) {
    const maxScore = Math.max.apply(null, scores);
    scores.forEach((value, index) => {
      if (value === maxScore) {
        this.#winner.push(this.#cars[index]);
      }
    });
    return this.#winner;
  }
}

module.exports = Game;