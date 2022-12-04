const CarGame = require('./CarGame');
const Controller = require('./Controller');

class App {
  play() {
    const carGame = new CarGame();

    Controller.run(carGame);
  }
}

module.exports = App;
