const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  RESULT_HEADER: '\n실행 결과',
  WINNERS: '최종 우승자 : ',
  ERORR_HEADER: '[ERROR] ',

  printResultHeader() {
    Console.print(OutputView.RESULT_HEADER);
  },

  printMap(mapViewData) {
    Console.print(`${mapViewData}\n`);
  },

  printWinners(winnersViewData) {
    Console.print(`${OutputView.WINNERS} ${winnersViewData}`);
    Console.close();
  },

  printError(error) {
    Console.print(`${OutputView.ERORR_HEADER}${error.message}`);
  },
};

module.exports = OutputView;
