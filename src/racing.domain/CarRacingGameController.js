const RACING_GAME = require("../racing.const/game");
const InputView = require("../racing.Input/InputView");
const OutputView = require("../racing.UI/OutputView");
const CarRacingGame = require("./CarRacingGame");

class CarRacingGameController {
  #carRacingGame;
  #gameCount;

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
      this.#gameCount = Number(number);
      const result = this.#carRacingGame.carRacigStart(this.#gameCount);
      OutputView.processPrint();
      this.printCarRacingGameProcess(result);
    });
  }

  printCarRacingGameProcess(result) {
    OutputView.movePrint(result);
    while (this.#carRacingGame.getGameStatus() === RACING_GAME.STATUS.PLAY) {
      const result = this.#carRacingGame.carRacigStart(this.#gameCount);
      OutputView.movePrint(result);
    }

    this.pirntCarRacingGameResult();
  }

  pirntCarRacingGameResult() {
    const gameResult = this.#carRacingGame.getGameResult();
    OutputView.gameResultPrint(gameResult);
  }
}

module.exports = CarRacingGameController;
