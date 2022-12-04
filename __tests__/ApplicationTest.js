// 미구현
const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join("");
};

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe("자동차 경주 테스트", () => {
  test("기능 테스트(우승자 1명인 경우)", () => {
    const logSpy = getLogSpy();

    mockQuestions(['pobi,woni,jun', 2]);
    mockRandoms([
      1,5,5,
      1,1,5
    ]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "실행 결과",
      "pobi :",
      "woni : -",
      "jun : -",
      "",
      "pobi :",
      "woni : -",
      "jun : --",
      "",
      "최종 우승자 : jun",
    ]);
  });

  test("기능 테스트(우승자 2명인 경우)", () => {
    const logSpy = getLogSpy();

    mockQuestions(['pobi,woni,jun', 5]);
    mockRandoms([
      5,2,5,
      5,5,5,
      5,5,5,
      5,5,5,
      5,5,5
    ]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "실행 결과",
      "pobi : -",
      "woni :",
      "jun : -",
      "",
      "pobi : --",
      "woni : -",
      "jun : --",
      "",
      "pobi : ---",
      "woni : --",
      "jun : ---",
      "",
      "pobi : ----",
      "woni : ---",
      "jun : ----",
      "",
      "pobi : -----",
      "woni : ----",
      "jun : -----",
      "최종 우승자 : pobi, jun",
    ]);
  });

  test("예외 테스트", () => {
    runException(["car1", "asdf"]);
  });

  test("예외 테스트2", () => {
    runException(["sizeover"]);
  });
});