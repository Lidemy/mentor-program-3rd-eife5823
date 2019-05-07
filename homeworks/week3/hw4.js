function isPalindromes(str) {
  // 判斷迴文
  // 反迴圈練習，注意字串長度條件
  let result = '';
  if (str.length < 100) {
    for (let i = str.length - 1; i >= 0; i -= 1) {
      result += str[i];
      if (result === str) return true;
    }
  }
  return false;
}

module.exports = isPalindromes;
