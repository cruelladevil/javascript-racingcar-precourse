const InputView = require('./InputView');

const Controller = {
  run(carGame) {
    Controller.createCars(carGame);
  },

  createCars(carGame) {
    InputView.readCarNames((input) => {
      const names = input.split(',');
      carGame.addCars(names);

      Controller.moveCars(carGame);
    });
  },

  moveCars(carGame) {
    InputView.readMoveCount((input) => {
      const count = Number(input);

      for (let i = 0; i < count; i += 1) {
        Controller.moveOnce(carGame);
      }
    });
  },

  moveOnce(carGame) {
    carGame.moveCars();
  },
};

module.exports = Controller;
