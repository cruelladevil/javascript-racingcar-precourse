const { Random } = require('@woowacourse/mission-utils');
const { RANDOM } = require('../utils/constants');

class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  // 추가 기능 구현
  move() {
    const randomNumber = Random.pickNumberInRange(
      RANDOM.MIN_NUMBER,
      RANDOM.MAX_NUMBER,
    );

    if (randomNumber >= RANDOM.MOVE_CONDITION_NUMBER) this.#position += 1;
  }

  getResult() {
    const name = this.#name;
    const position = this.#position;

    return { name, position };
  }
}

module.exports = Car;
