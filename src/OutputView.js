const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  WINNERS: '최종 우승자 : ',

  printMap(mapViewData) {
    Console.print(`${mapViewData}\n`);
  },

  printWinners(winnersViewData) {
    Console.print(`${OutputView.WINNERS} ${winnersViewData}`);
    Console.close();
  },
};

module.exports = OutputView;
