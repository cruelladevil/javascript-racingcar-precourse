const CarRacingGameController = require("../src/racing.domain/CarRacingGameController");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join("");
};

const runException = (inputs, callback) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  callback();
  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const gameController = new CarRacingGameController();

describe("자동차 리스트 입력 예외 처리", () => {
  test("5글자 이상 입력 ", () => {
    runException(
      [, "dsds", "wewe", "jjjjjj"],
      gameController.inputCarNameList.bind(gameController)
    );
  });
  test("자동차 하나만 입력 ", () => {
    runException(["jk"], gameController.inputCarNameList.bind(gameController));
  });
});

describe("게임 카운트 입력 예외 처리", () => {
  test("숫자아닌것을 입력 ", () => {
    runException(
      ["ds"],
      gameController.inputCarRacingGameCount.bind(gameController)
    );
  });
  test("정수가 아닌 수 를 입력 ", () => {
    runException(["0"], gameController.inputCarNameList.bind(gameController));
  });
});
