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
    const winnerResult =
      winner.length === 1
        ? winner[0]
        : winner.reduce((acc, cur, index) => {
            if (index < winner.length - 1) return acc.concat(cur, ", ");
          }, "");
    Console.print(`${GAME.OUTPUT.WINNER}${winnerResult}`);
    Console.close();
  },
};

module.exports = OutputView;
