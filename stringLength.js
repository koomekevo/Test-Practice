function stringLength(string) {
    const result = string.length
    if (result < 1) {
      throw new Error('Empty String.');
    }
    if(result > 10) {
      throw new Error('String too long.');
    }
    return result;
  }
  
  module.exports = stringLength;