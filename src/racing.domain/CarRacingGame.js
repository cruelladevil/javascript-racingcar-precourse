const Car = require("./Car");
const Generator = require("./GeneratorNumber");

class CarRacingGame {
  #racers = [];
  #gameStatus = 100;

  initCarNameList(listStr) {
    const carList = listStr.split(",");
    carList.map((racerInfo) => {
      const racer = new Car(racerInfo);
      this.#racers.push(racer);
    });
  }

  carRacigStart(gamecount) {
    const position = this.#racers[0].getCarPosition();
    let result = [];
    if (position < gamecount) result = this.racerMoveOnePosition(this.#racers);
    if (position === gamecount) this.#gameStatus = 101;
    return result;
  }

  racerMoveOnePosition(racers) {
    let result = [];
    racers.map((racer) => {
      const name = racer.getCarName();
      const gameResult = racer
        .carMoveFoward()
        .pushMoveResult(Generator.RandomNumber())
        .getCarResult();
      result.push(name.concat(":", gameResult));
    });
    return result;
  }

  getGameStatus() {
    return this.#gameStatus;
  }

  selectGameWinner() {}

  getGameResult() {}
}

module.exports = CarRacingGame;
