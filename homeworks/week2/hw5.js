function join(arr, concatStr) {
  // 實作 join()
  let result = ''; // 將結果存進 result
  for (let i = 0; i < arr.length - 1; i += 1) {
    result += arr[i] + concatStr; // 迭代陣列
  }
  result += arr[arr.length - 1]; // 最後再把陣列的最後一個元素加進去
  return result;
}

function repeat(str, times) {
  // 實作 repeat() 重複字串
  let result = '';
  for (let i = 1; i <= times; i += 1) {
    result += str; // 每跑一次迴圈就把字串加進 result，重複 times 次數
  }
  return result;
}

console.log(join([1, 2, 3], '!')); // 1!2!3
console.log(repeat('a', 5)); // aaaaa
