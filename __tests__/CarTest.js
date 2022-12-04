const Car = require('../src/Model/Car');

describe('Car 테스트입니다.', () => {
  test('getResult - name과 position을 반환합니다.', () => {
    const car = new Car('pobi');

    const result = { name: 'pobi', position: 0 };

    expect(car.getResult()).toEqual(result);
  });
});
