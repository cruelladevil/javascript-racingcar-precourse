const { CAR_NAME_RANGE } = require("../constants/Config");
const { VALIDATION_MESSAGE } = require("../constants/Message");
const Validation = {
  validateCarNames(input) {
    const stringInput = input;
    const specialCharacterExceptCommaRegExp =
      /[\{\}\[\]\/?.;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"\s]/g;
    const splitedInput = stringInput.split(",");

    if (specialCharacterExceptCommaRegExp.test(input)) {
      throw Error(VALIDATION_MESSAGE.CAR.MUST_USE_COMMA);
    }
    splitedInput.forEach((name) => {
      if (name.length > CAR_NAME_RANGE)
        throw new Error(VALIDATION_MESSAGE.CAR.OVER_NAME_RANGE);
    });
  },

  validateTryCount(input) {
    if (Number.isNaN(Number(input))) {
      throw Error(VALIDATION_MESSAGE.TRY.MUST_BE_NUMBER);
    }

    if (Number(input) < 0) {
      throw Error(VALIDATION_MESSAGE.TRY.MUST_BE_BIGGER_THAN_ZERO);
    }
  },
};

module.exports = Validation;
