const InputView = require('./InputView');
const Game = require('./Game');
const OutputView = require("./OutputView");

class App {
  constructor() {
    this.game = new Game();
  }

  play() {
    this.userInputCarName();
  }

  userInputCarName() {
    InputView.readCarName(carName => {
      this.cars = carName.split(',');
      this.game.setCars(this.cars);
      this.userInputTryCount();
    });
  }

  userInputTryCount() {
    InputView.readTryCount(count => {
      OutputView.printStartResult();
      this.game.setTryCount(Number(count));
      OutputView.printWinner(this.game.getWinner());
    });
  }
}

module.exports = App;
