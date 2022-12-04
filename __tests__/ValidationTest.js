const Validation = require('../src/utils/Validation');

describe('Validation 테스트입니다.', () => {
  describe('validateCarNames 메소드 테스트입니다.', () => {
    test('validateParticipant - 참가자가 최소 2명 이어야 합니다.', () => {
      const input = 'pobi';
      const carNames = input.split(',');

      expect(() => Validation.validateParticipant(carNames)).toThrow();
    });

    test('validateEmptyname - 자동차 이름은 최소 1자 이상이어야 합니다.', () => {
      const input = ',';
      const carNames = input.split(',');

      expect(() => Validation.validateEmptyname(carNames)).toThrow();
    });

    test('validateCarNameLength - 자동차 이름은 최대 5자 입니다.', () => {
      const input = 'pobi,crong,whoooooo';
      const carNames = input.split(',');

      expect(() => Validation.validateCarNameLength(carNames)).toThrow();
    });
  });

  describe('validateMoveCount 메소드 테스트입니다.', () => {
    test('validateNaN - 숫자만 입력 가능합니다.', () => {
      const input = 'pobi';
      const count = Number(input);

      expect(() => Validation.validateNaN(count)).toThrow();
    });

    test('validatePositive - 최소 1회 이상 움직여야 합니다.', () => {
      const input = '0';
      const count = Number(input);

      expect(() => Validation.validatePositive(count)).toThrow();
    });
  });
});
