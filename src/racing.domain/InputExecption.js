const RACING_GAME = require("../racing.const/game");

const exception = (ment) => new Error(`[ERROR] ${ment}`);

const MENT = {
  MIN_CAR_COUNT: "차는 최소 2개 이상이여야 합니다.",
  MAX_CAR_NAME: "차의 이름은 5 글자 이하여야 합니다.",
  ONLY_NUMBER_INPUT: "숫자만 입력 가능합니다.",
  INPUT_POSITIVE_INTEGER: "1 이상의 정수만 입력 가능합니다.",
};

const InputException = {
  checkNameList(listStr) {
    nameArr = listStr.split(",");
    console.log(nameArr, nameArr.length);
    if (nameArr.length < 2) throw exception(MENT.MIN_CAR_COUNT);
    nameArr.map((name) => {
      if (name.length > 5) throw exception(MAX_CAR_NAME);
    });
  },

  checkGameCount(count) {
    const number = Number(count);
    if (Number.isNaN(number)) throw exception(MENT.ONLY_NUMBER_INPUT);
    if (number < RACING_GAME.INPUT_CONUT.MIN)
      throw exception(INPUT_POSITIVE_INTEGER);
  },
};

module.exports = InputException;
