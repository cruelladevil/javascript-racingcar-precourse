const Car = require("./Car");

class CarRacingGame {
  #racers = [];

  initCarNameList(listStr) {
    const carList = listStr.split(",");
    carList.map((racer) => {
      const racer = new Car(racer);
      this.#racers.push(racer);
    });
  }

  inputMoveCount(number) {}

  carRacigStart(count) {}

  selectGameWinner() {}

  getGameResult() {}
}

module.exports = CarRacingGame;
