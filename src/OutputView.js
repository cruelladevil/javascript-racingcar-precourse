const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printMap(mapViewData) {
    Console.print(`${mapViewData}\n`);
  },
};

module.exports = OutputView;
