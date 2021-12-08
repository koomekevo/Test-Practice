function reverseString(string) {
    let reversedString = [];
  
    for (let c of string) {
      reversedString.unshift(c);
    }
  
    return reversedString.join('');
  }
  
  module.exports = reverseString;