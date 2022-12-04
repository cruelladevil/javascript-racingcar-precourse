const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  MOVE_COUNT: '시도할 회수는 몇회인가요?\n',

  readCarNames(callback) {
    Console.readLine(InputView.CAR_NAMES, callback);
  },

  readMoveCount(callback) {
    Console.readLine(InputView.MOVE_COUNT, callback);
  },
};

module.exports = InputView;
