const Car = require("./Car");
const Generator = require("./GeneratorNumber");

class CarRacingGame {
  #racers = [];
  #count = 0;
  #gameStatus = 100;

  initCarNameList(listStr) {
    const carList = listStr.split(",");
    carList.map((racerInfo) => {
      const racer = new Car(racerInfo);
      this.#racers.push(racer);
    });
  }

  carRacigStart(gamecount) {
    let result = [];
    if (this.#count < gamecount) {
      result = this.racerMoveOnePosition(this.#racers);
      this.#count += 1;
    }
    //to do : status  상수로 빼기
    if (this.#count === gamecount) this.#gameStatus = 101;
    return result;
  }

  racerMoveOnePosition(racers) {
    let result = [];
    racers.map((racer) => {
      const name = racer.getCarName();
      const gameResult = racer
        .pushMoveResult(Generator.RandomNumber())
        .getCarResult();
      result.push(name.concat(" : ", gameResult));
    });
    return result;
  }

  getGameStatus() {
    return this.#gameStatus;
  }

  getGameResult() {
    const result = this.selectGameWinner(this.#racers);
    return result.map((racer) => racer.getCarName());
  }

  selectGameWinner(racers) {
    const orderedArr = racers.sort(
      (a, b) => b.getCarPosition() - a.getCarPosition()
    );
    const first = orderedArr[0].getCarPosition();
    return orderedArr.filter((racer) => racer.getCarPosition() === first);
  }
}

module.exports = CarRacingGame;
