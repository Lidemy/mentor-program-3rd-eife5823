function isPrime(n) {
  // 判斷質數
  /* 判斷是否有除了自己及 1 以外的其他因數，這邊須注意 1 不是質數，所以 1 拿出來另外判斷 */
  if (n > 1 && n <= 100000) {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) return false;
    }
  } else if (n === 1) return false;
  return true;
}

module.exports = isPrime;
