const { CAR_NAME_RANGE } = require("./Config");

// input message
const INPUT_CAR_NAMES = "경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n";
const INPUT_TRY_COUNT = "시도할 회수\n";

// ouput message
const OUTPUT_EXCUTE_MSG = "\n실행 결과\n";

const VALIDATION_MESSAGE = {
  CAR: {
    MUST_USE_COMMA:
      "자동차 이름은 띄어쓰기 없이 쉼표로 구분해주세요. 예)pobi,yuu,jun",
    OVER_NAME_RANGE: `자동차 이름은 ${CAR_NAME_RANGE}자 이하이어야 합니다.`,
  },

  TRY: {
    MUST_BE_NUMBER: "시도 회수는 숫자여야 합니다.",
    MUST_BE_BIGGER_THAN_ZERO: "시도 회수는 양의 정수 값이어야 합니다.",
  },
};

module.exports = {
  INPUT_CAR_NAMES,
  INPUT_TRY_COUNT,
  OUTPUT_EXCUTE_MSG,
  VALIDATION_MESSAGE,
};
