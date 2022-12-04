const { Console } = require("@woowacourse/mission-utils");
const {OUTPUT_START_RESULT} = require("./Constant");

const OutputView = {

  printError(error) {
    Console.print(error.message);
  },

  printStartResult() {
    Console.print(OUTPUT_START_RESULT);
  },

  printStatus(car, status) {
    Console.print(`${car} : ${status}`);
  },

  printWinner(winner) {
    Console.print(`최종 우승자 : ${winner.join(', ')}`);
    Console.close();
  },

  printBlank() {
    Console.print('');
  },
}

module.exports = OutputView;