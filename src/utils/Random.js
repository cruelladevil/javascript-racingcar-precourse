const { Random } = require("@woowacourse/mission-utils");
const { RANDOM_RANGE } = require("../constants/Config");

const getRandomNumber = () => {
  const randomNumber = Random.pickNumberInRange(
    RANDOM_RANGE.START_INCLUSIVE,
    RANDOM_RANGE.END_INCLUSIVE
  );
  return randomNumber;
};

module.exports = {
  getRandomNumber,
};
