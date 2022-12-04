const { Random } = require("@woowacourse/mission-utils");
const RACING_GAME = require("../racing.const/game");

const Generator = {
  RandomNumber() {
    return Random.pickNumberInRange(
      RACING_GAME.RANDOM.MIN,
      RACING_GAME.RANDOM.MAX
    );
  },
};

module.exports = Generator;
