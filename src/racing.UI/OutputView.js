const { Console } = require("@woowacourse/mission-utils");
const GAME = require("../racing.const/ment");

const OutputView = {
  errorPrint(error) {
    Console.print(error.message);
  },

  processPrint() {
    Console.print(GAME.OUTPUT.MOVE_RESULT);
  },

  movePrint(gameProcessResult) {
    const moveResult = gameProcessResult.reduce((acc, cur) => {
      return acc.concat(cur, "\n");
    }, "");
    Console.print(moveResult);
  },

  gameResultPrint(winner) {
    const length = winner.length;
    const winnerResult = length === 1 ? winner[0] : winner.join(", ");
    Console.print(`${GAME.OUTPUT.WINNER}${winnerResult}`);
    Console.close();
  },
};

module.exports = OutputView;
