const RacingGame = require("./RacingGame");

class App {
  play() {
    const rg = new RacingGame();
    rg.startRacing();
  }
}

const app = new App();
app.play();

module.exports = App;
