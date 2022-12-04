const InputView = require('./InputView');

const Controller = {
  run(carGame) {
    Controller.createCars(carGame);
  },

  createCars(carGame) {
    InputView.readCarNames((input) => {
      const names = input.split(',');
      carGame.addCars(names);
    });
  },
};

module.exports = Controller;
