const Car = require("./Car");

class CarRacingGame {
  #racers = [];

  initCarNameList(listStr) {
    const carList = listStr.split(",");
    carList.map((racerInfo) => {
      const racer = new Car(racerInfo);
      this.#racers.push(racer);
    });
  }

  carRacigStart(count) {}

  selectGameWinner() {}

  getGameResult() {}
}

module.exports = CarRacingGame;
