function printFactor(n) {
  // 印出所有因數
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}
printFactor(10);
