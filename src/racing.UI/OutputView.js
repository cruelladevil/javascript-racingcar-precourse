const { Console } = require("@woowacourse/mission-utils");
const GAME = require("../racing.const/ment");

const OutputView = {
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
    const ment = `${GAME.OUTPUT.WINNER} : ${winner}`;
    Console.print(ment);
    Console.close();
  },
};

module.exports = OutputView;
