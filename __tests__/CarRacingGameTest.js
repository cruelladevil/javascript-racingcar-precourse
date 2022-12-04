const CarRacingGame = require("../src/racing.domain/CarRacingGame");
const MissionUtils = require("@woowacourse/mission-utils");

const carRacingGame = new CarRacingGame();
carRacingGame.initCarNameList("jun,yarn,npm");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("자동차 레이싱 게임 테스트", () => {
  const count = 5;
  test("전체 전진 테스트", () => {
    mockRandoms([0, 9, 9, 7, 0, 9, 8, 8, 8]);
    const expects = [
      ["jun : ", "yarn : -", "npm : -"],
      ["jun : -", "yarn : -", "npm : --"],
      ["jun : --", "yarn : --", "npm : ---"],
    ];

    expects.forEach((arr) => {
      const result = carRacingGame.carRacigStart(count);
      expect(result).toEqual(arr);
    });
  });

  test("1등 구하기 테스트", () => {
    const result = carRacingGame.getGameResult();
    expect(result).toEqual(["npm"]);
  });
});
