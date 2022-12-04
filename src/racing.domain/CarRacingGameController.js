const InputView = require("../racing.Input/InputView");
const CarRacingGame = require("./CarRacingGame");

class CarRacingGameController {
  #carRacingGame;

  constructor() {
    this.#carRacingGame = new CarRacingGame();
  }

  inputCarNameList() {
    InputView.carList((list) => {
      //to do :validation
      this.#carRacingGame.inputCarNameList(list);
      this.ininputCarRacingGameCount();
    });
  }

  inputCarRacingGameCount() {}
}

module.exports = CarRacingGameController;
