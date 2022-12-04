const Validation = require("../src/validation/Validation");
describe("예외 처리 테스트", () => {
  test("자동차 이름을 입력받을 때 쉼표로 구분한다. 쉼표로 구분이 안될 경우 예외 처리한다.", () => {
    expect(() => {
      Validation.validateCarNames("pobi jun yuu");
    }).toThrow();
  });

  test("자동차 이름은 5자 이하여야 한다. 5자 초과하면 예외 처리한다.", () => {
    expect(() => {
      Validation.validateCarNames("hihihihihi,jun,yuu");
    }).toThrow();
  });

  test("시도 회수는 양의 정수 값이어야 한다. 양의 정수가 아닌 경우 예외 처리한다.", () => {
    expect(() => {
      Validation.validateTryCount(-1);
    }).toThrow();
  });

  test("시도 회수는 숫자이어야 한다. 숫자가 아닌 경우 예외 처리한다.", () => {
    expect(() => {
      Validation.validateTryCount("a");
      Validation.validateTryCount("1a");
    }).toThrow();
  });
});
