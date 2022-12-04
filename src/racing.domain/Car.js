const RACING_GAME = require("../racing.const/game");

class Car {
  #name;
  #position = 0;
  #moveResult = "";

  constructor(name) {
    this.#name = name;
  }

  getCarName() {
    return this.#name;
  }

  getCarPosition() {
    return this.#position;
  }

  pushMoveResult(number) {
    if (number >= RACING_GAME.MOVE_CONDITION) {
      this.#position += 1;
      this.#moveResult = this.#moveResult.concat(RACING_GAME.MOVE);
    }
    return this;
  }

  getCarResult() {
    return this.#moveResult;
  }
}

module.exports = Car;
