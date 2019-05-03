function printStars(n) {
  // 每跑一個迴圈就印出一個星星
  // 注意設定 n 的範圍
  for (let i = 1; i <= n && n <= 30; i += 1) {
    console.log('*');
  }
}

printStars(30);
