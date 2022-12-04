const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const Validation = require('../utils/Validation');

const InputView = {
  CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  MOVE_COUNT: '시도할 회수는 몇회인가요?\n',

  readCarNames(callback) {
    InputView.question(
      InputView.CAR_NAMES,
      Validation.validateCarNames,
      callback,
    );
  },

  readMoveCount(callback) {
    InputView.question(
      InputView.MOVE_COUNT,
      Validation.validateMoveCount,
      callback,
    );
  },

  question(string, validateFn, callback) {
    Console.readLine(string, (input) => {
      try {
        validateFn(input);
        callback(input);
      } catch (error) {
        OutputView.printError(error);
        InputView.question(string, validateFn, callback);
      }
    });
  },
};

module.exports = InputView;
