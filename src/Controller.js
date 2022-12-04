const InputView = require('./InputView');
const OutputView = require('./OutputView');
const ViewData = require('./ViewData');

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
    const mapViewData = ViewData.buildMapViewData(carGame.getResults());
    OutputView.printMap(mapViewData);
  },
};

module.exports = Controller;
