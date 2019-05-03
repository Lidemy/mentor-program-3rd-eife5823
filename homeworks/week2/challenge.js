function search(arr, n) { // 回傳 n 在 arr 裡的 index
  /* 找出比迭代陣列中每個元素更快的方法 */
  /* 陣列是依序排列且不重複，先找出中間數，若傳進來的 n 比中間數大，
  則往後找，反之若比中間數小則往前找 */
  const middle = Math.floor(arr.length / 2);

  if (n >= arr[middle]) {
    for (let i = middle; i < arr.length; i += 1) {
      if (arr[i] === n) {
        return n;
      }
    }
  } else if (n <= arr[middle]) {
    for (let i = 0; i < middle; i += 1) {
      if (arr[i] === n) {
        return n;
      }
    }
  }
  return -1;
}

search([1, 3, 10, 14, 39], 14); // 3
search([1, 3, 10, 14, 39], 299);// -1
