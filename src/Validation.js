const Validation = {
  validateCarNames(input) {
    const carNames = input.split(',');

    Validation.validateParticipant(carNames);
    Validation.validateEmptyname(carNames);
    Validation.validateCarNameLength(carNames);
  },

  validateParticipant(carNames) {
    if (carNames.length === 1) {
      throw new Error('참가자가 1명 밖에 없습니다.');
    }
  },

  validateEmptyname(carNames) {
    if (carNames.some((carName) => carName === '')) {
      throw new Error('자동차 이름은 최소 1자 이상 써주세요.');
    }
  },

  validateCarNameLength(carNames) {
    if (carNames.some((carName) => carName.length > 5)) {
      throw new Error('자동차 이름은 5자 이하만 가능합니다.');
    }
  },

  validateMoveCount(input) {
    const count = Number(input);

    Validation.validateNaN(count);
  },

  validateNaN(count) {
    if (Number.isNaN(count)) {
      throw new Error('이동 횟수는 숫자만 입력해주세요.');
    }
  },
};

module.exports = Validation;
