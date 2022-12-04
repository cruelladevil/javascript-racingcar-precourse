const InputView = require("./InputView");
const { getRandomNumber } = require("./utils/Random");
const {
  printRoundResult,
  printWinners,
  printExcuteResult,
} = require("./OutputView");

const Car = require("./Car");

class RacingGame {
  #cars;
  #tryCounts = 0;

  constructor() {
    this.#cars = [];
  }

  onInputCarNamse = (input) => {
    const stringInput = input;
    const carNames = stringInput.split(",");

    carNames.map((car) => {
      this.#cars.push(new Car(car));
    });

    InputView.readTry(this.onInputTryCount);
  };

  onInputTryCount = (input) => {
    this.#tryCounts = Number(input);
    this.onRacing();
    printWinners(this.getWinners(this.getMaxPosition()));
  };

  startRacing() {
    InputView.readCarNames(this.onInputCarNamse);
  }

  onRacing() {
    printExcuteResult();
    for (let i = 0; i < this.#tryCounts; i++) {
      const roundText = this.buildRoundResultText();
      printRoundResult(roundText);
    }
  }

  buildRoundResultText() {
    let roundText = "";
    this.#cars.map((car) => {
      const moveValue = getRandomNumber();
      car.move(moveValue);
      roundText += this.createMoveText(car.getResult());
    });
    return roundText;
  }

  createMoveText({ carName, position }) {
    let moveText = "";

    for (let i = 0; i < position; i++) {
      moveText += "-";
    }

    return `${carName} : ${moveText}\n`;
  }

  getMaxPosition() {
    let positionArray = [];

    this.#cars.forEach((car) => positionArray.push(car.getResult().position));

    return Number(Math.max(...positionArray));
  }

  getWinners(max) {
    let winners = [];

    this.#cars.forEach((car) => {
      const { carName, position } = car.getResult();

      if (max === position) {
        winners.push(carName);
      }
    });

    return winners;
  }
}

module.exports = RacingGame;
