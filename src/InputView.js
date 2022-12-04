const { readLine } = require("./utils/Utils");
const { INPUT_CAR_NAMES, INPUT_TRY_COUNT } = require("./constants/Message");
const { printError } = require("./OutputView");
const {
  validateCarNames,
  validateTryCount,
} = require("./validation/Validation");

const InputView = {
  validateInput(input, validator, callback) {
    validator(input);
    callback(input);
  },

  readUserInputRecrusive(query, callback, validator) {
    readLine(query, (input) => {
      try {
        this.validateInput(input, validator, callback);
      } catch (error) {
        printError(error);
        this.readUserInputRecrusive(query, callback, validator);
      }
    });
  },

  readCarNames(callback) {
    this.readUserInputRecrusive(INPUT_CAR_NAMES, callback, validateCarNames);
  },

  readTry(callback) {
    this.readUserInputRecrusive(INPUT_TRY_COUNT, callback, validateTryCount);
  },
};

module.exports = InputView;
