const { Console } = require("@woowacourse/mission-utils");
const GAME = require("../racing.const/ment");

const InputView = {
  carList(callback) {
    Console.readLine(GAME.INPUT.CAR_LIST, callback);
  },

  gameCount(callback) {
    Console.readLine(GAME.INPUT.COUNT, callback);
  },
};

module.exports = InputView;
