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
      this.#carRacingGame.initCarNameList(list);
      this.inputCarRacingGameCount();
    });
  }

  inputCarRacingGameCount() {
    InputView.gameCount((number) => {
      //to do :validation
      this.#carRacingGame.carRacigStart(number);
    });
  }
}

module.exports = CarRacingGameController;
