const ViewData = require('../src/Controller/ViewData');

describe('ViewData 테스트입니다.', () => {
  test('buildMapViewData - 자동차 이동 상황을 만듭니다.', () => {
    const results = [
      { name: 'pobi', position: 3 },
      { name: 'crong', position: 2 },
      { name: 'moly', position: 2 },
    ];

    const viewDataExpect = 'pobi : ---\ncrong : --\nmoly : --';

    expect(ViewData.buildMapViewData(results)).toBe(viewDataExpect);
  });

  test('buildWinnersViewData - 자동차 이름은 최소 1자 이상이어야 합니다.', () => {
    const winnersMock = [
      ['pobi'],
      ['pobi', 'crong'],
      ['pobi', 'crong', 'moly'],
    ];

    const viewDataExpects = [
      'pobi',
      'pobi, crong',
      'pobi, crong, moly',
    ];

    winnersMock.forEach((winners, i) => {
      const winnersViewData = viewDataExpects[i];
      expect(ViewData.buildWinnersViewData(winners)).toBe(winnersViewData);
    });
  });
});
