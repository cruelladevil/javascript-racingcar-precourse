const RACING_GAME = require("../racing.const/game");

const exception = (ment) => new Error(`[ERROR] ${ment}`);

const InputException = {
  checkNameList(listStr) {
    nameArr = listStr.split(",");
    console.log(nameArr, nameArr.length);
    if (nameArr.length < 2) throw exception("차는 최소 2개 이상이여야 합니다.");
    nameArr.map((name) => {
      if (name.length > 5)
        throw exception("차의 이름은 5 글자 이하여야 합니다.");
    });
  },

  checkGameCount(count) {
    const number = Number(count);
    if (Number.isNaN(number)) throw exception("숫자만 입력 가능합니다.");
    if (number < RACING_GAME.INPUT_CONUT.MIN)
      throw exception("1 이상의 정수만 입력 가능합니다.");
  },
};

module.exports = InputException;
