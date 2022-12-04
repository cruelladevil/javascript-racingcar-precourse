const CarGame = require('../src/Model/CarGame');

describe('CarGame 테스트입니다.', () => {
  test('getResults - Car 객체들의 이동 결과(name, position)들을 배열로 반환합니다.', () => {
    const carGame = new CarGame();
    const names = ['pobi', 'crong'];
    carGame.addCars(names);

    const results = [
      { name: 'pobi', position: 0 },
      { name: 'crong', position: 0 },
    ];

    expect(carGame.getResults()).toEqual(results);
  });

  test('getWinners - 승자의 name을 반환합니다.', () => {
    const carGame = new CarGame();
    const names = ['pobi', 'crong'];
    carGame.addCars(names);

    const winners = ['pobi', 'crong'];

    expect(carGame.getWinners()).toEqual(winners);
  });
});
