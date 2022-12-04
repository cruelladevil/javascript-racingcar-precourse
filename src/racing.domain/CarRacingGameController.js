const RACING_GAME = require("../racing.const/game");
const InputView = require("../racing.Input/InputView");
const OutputView = require("../racing.UI/OutputView");
const CarRacingGame = require("./CarRacingGame");
const InputException = require("./InputExecption");

class CarRacingGameController {
  #carRacingGame;
  #gameCount;

  constructor() {
    this.#carRacingGame = new CarRacingGame();
  }

  inputCarNameList() {
    InputView.carList((list) => {
      try {
        InputException.checkNameList(list);
        this.#carRacingGame.initCarNameList(list);
        this.inputCarRacingGameCount();
      } catch (error) {
        OutputView.errorPrint(error);
        this.inputCarNameList();
      }
    });
  }

  inputCarRacingGameCount() {
    InputView.gameCount((number) => {
      try {
        InputException.checkGameCount(number);
        this.carRacingStart(number);
      } catch (error) {
        OutputView.errorPrint(error);
        this.inputCarRacingGameCount();
      }
    });
  }

  carRacingStart(count) {
    this.#gameCount = Number(count);
    OutputView.processPrint();
    const result = this.#carRacingGame.carRacigStart(this.#gameCount);
    this.printCarRacingGameProcess(result);
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
