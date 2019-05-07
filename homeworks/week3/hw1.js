function stars(n) {
  let result = '';
  const arr = []; // 最後的結果會是陣列

  if (n >= 1 && n <= 30) { // 設定 n 的範圍在 1~30 間
    for (let i = 1; i <= n; i += 1) {
      /* 每跑完一圈，就加一個 * 進 result，並把結果 push 進 arr */
      result += '*';
      arr.push(result);
    }
  } else console.log('please submit n between 1~30');
  return arr;
}

module.exports = stars;
