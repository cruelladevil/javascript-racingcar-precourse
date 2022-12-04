const { Random } = require("@woowacourse/mission-utils");

class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;
    this.advanceCar();
  }

  getStatus() {
    if (this.#position === 1) {
      return '-';
    } else {
      return '';
    }
  }

  // 추가 기능 구현
  advanceCar() {
    const number = Random.pickNumberInRange(0, 9);
    if (number >= 4) {
      this.#position += 1;
    } else {
      return this.#position;
    }
  }
}

module.exports = Car;
