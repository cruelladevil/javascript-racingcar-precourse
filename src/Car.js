const { MOVE_THRESHOLDS } = require("./constants/Config");

class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  // 추가 기능 구현
  move(moveValue) {
    if (!this.isMove(moveValue)) return;

    this.#position += 1;
    return;
  }

  isMove(moveValue) {
    return moveValue >= MOVE_THRESHOLDS;
  }

  getResult() {
    const carName = this.#name;
    const position = this.#position;

    return { carName, position };
  }
}

module.exports = Car;
