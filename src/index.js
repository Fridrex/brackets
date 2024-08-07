module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let brackets = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === brackets[stack[stack.length - 1]]) {
      stack.pop();
    } else if (brackets[str[i]]) {
      stack.push(str[i]);
    } else {
      return false;
    }
  }
  return stack.length === 0;
}
