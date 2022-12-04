const { Console } = require("@woowacourse/mission-utils");
const OutputView = require('./OutputView');
const {INPUT_CAR_NAME, INPUT_TRY_COUNT} = require("./Constant");
const ValidateInput = require('./ValidateInput');

const InputView = {
  validateAndCallback(input, validator, callback) {
    validator(input);
    callback(input);
  },

  getUserInputRecursive(prompt, callback, validator) {
    Console.readLine(prompt, input => {
      try {
        this.validateAndCallback(input, validator, callback);
      } catch (error) {
        OutputView.printError(error);
        this.getUserInputRecursive(prompt, callback, validator);
      }
    });
  },

  readCarName(callback) {
    this.getUserInputRecursive(INPUT_CAR_NAME, input => {
      callback(input);
    }, ValidateInput.carName);
  },

  readTryCount(callback) {
    this.getUserInputRecursive(INPUT_TRY_COUNT, input => {
      callback(input);
    }, ValidateInput.tryCount);
  },

}

module.exports = InputView;