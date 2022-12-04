const { print, close } = require("./utils/Utils");
const { OUTPUT_EXCUTE_MSG } = require("./constants/Message");

const OutputView = {
  printExcuteResult() {
    print(OUTPUT_EXCUTE_MSG);
  },
  printRoundResult(resultText) {
    print(resultText);
  },
  printWinners(winners) {
    print(`최종 우승자 : ${winners.join(", ")}`);
    close();
  },
  printError(error) {
    print(`[ERROR] ${error.message}`);
  },
};

module.exports = OutputView;
