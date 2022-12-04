const {ERROR_NOT_NUMBER, ERROR_NAME_SIZE} = require('./Constant');

const ValidateInput = {
  carName(input) {
    input.split(',').forEach(value => {
      if (value.length > 5) {
        throw new Error(ERROR_NAME_SIZE);
      }
    });
  },

  tryCount(input) {
    input = Number(input);
    if (!input) {
      throw new Error(ERROR_NOT_NUMBER);
    }
  }
}

module.exports = ValidateInput;