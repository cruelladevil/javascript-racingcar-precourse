const RACING_GAME = require("../racing.const/game");

class Car {
  #name;
  #position = 0;
  #moveResult = "";

  constructor(name) {
    this.name = name;
  }

  getCarName() {
    return this.#name;
  }

  getCarPosition() {
    return this.#position;
  }

  carMoveFoward() {
    this.#position += 1;
  }

  pushMoveResult(number) {
    if (number >= RACING_GAME.MOVE_CONDITION)
      this.#moveResult.concat(RACING_GAME.MOVE);
  }

  getCarResult() {
    return this.#moveResult;
  }
}

module.exports = Car;
