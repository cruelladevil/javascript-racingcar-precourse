const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

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
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join('');
};

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe('자동차 경주 테스트', () => {
  test('기능 테스트', () => {
    mockRandoms([
      5, 1, 7,
      4, 9, 6,
      7, 6, 9,
      7, 9, 8,
      9, 6, 6,
    ]);
    mockQuestions(['pobi,woni,jun', '5']);

    const logs = [
      '실행 결과',
      'pobi : -',
      'woni : ',
      'jun : -',
      '',
      'pobi : --',
      'woni : -',
      'jun : --',
      '',
      'pobi : ---',
      'woni : --',
      'jun : ---',
      '',
      'pobi : ----',
      'woni : ---',
      'jun : ----',
      '',
      'pobi : -----',
      'woni : ----',
      'jun : -----',
      '',
      '최종 우승자 : pobi, jun',
    ];

    const logSpy = getLogSpy();
    const app = new App();
    app.play();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('예외 테스트', () => {
    runException(['long-name']);
  });
});
