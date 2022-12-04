const Controller = require('./Controller/Controller');
const CarGame = require('./Model/CarGame');

class App {
  play() {
    const carGame = new CarGame();

    Controller.run(carGame);
  }
}

module.exports = App;
