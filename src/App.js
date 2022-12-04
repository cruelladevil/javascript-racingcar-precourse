const CarRacingGameController = require("./racing.domain/CarRacingGameController");

class App {
  play() {
    const game = new CarRacingGameController();
    game.inputCarNameList();
  }
}

const app = new App();
app.play();

module.exports = App;
