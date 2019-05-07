function alphaSwap(str) {
  // 大小寫互換
  let result = '';
  for (let i = 0; i < str.length; i += 1) { // 注意字串跟陣列一樣也是從 index 0 開始
    if (str[i] >= 'A' && str[i] <= 'Z') {
      result += str[i].toLowerCase();
    } else if (str[i] >= 'a' && str[i] <= 'z') {
      result += str[i].toUpperCase();
    } else result += str[i];
  }
  return result;
}

module.exports = alphaSwap;
