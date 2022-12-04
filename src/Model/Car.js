const { Random } = require('@woowacourse/mission-utils');

class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  // 추가 기능 구현
  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);

    if (randomNumber >= 4) this.#position += 1;
  }

  getResult() {
    const name = this.#name;
    const position = this.#position;

    return { name, position };
  }
}

module.exports = Car;
