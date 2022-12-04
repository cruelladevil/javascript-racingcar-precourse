const Car = require("../src/racing.domain/Car");

describe("자동차 전진 테스트", () => {
  test("자동차 전진 테스트 1", () => {
    const numbers = [1, 6, 7, 4, 1, 9];
    const car = new Car("JUN");
    numbers.forEach((number) => car.pushMoveResult(number));
    expect(car.getCarResult()).toMatch("---");
  });

  test("자동차 전진 테스트 2", () => {
    const numbers = [9, 9, 7, 4, 3, 9];
    const car = new Car("JUN");
    numbers.forEach((number) => car.pushMoveResult(number));
    expect(car.getCarResult()).toMatch("----");
  });

  test("자동차 위치 확인 테스트", () => {
    const numbers = [1, 6, 7, 4, 1, 9];
    const car = new Car("JUN");
    numbers.forEach((number) => car.pushMoveResult(number));
    expect(car.getCarPosition()).toBe(4);
  });
});
