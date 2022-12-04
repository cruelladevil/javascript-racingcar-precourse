const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  movePrint(gameProcessResult) {
    const moveResult = gameProcessResult.reduce((acc, cur) => {
      return acc.concat(cur, "\n");
    }, "");
    Console.print(moveResult);
  },

  gameResultPrint() {},
};

module.exports = OutputView;
