function add(a, b) {
  /* 大數加法 8989 + 1111，由於想要以陣列的方式來相加，所以將輸入的字串轉陣列，
  並將陣列反轉，讓我們可以從左加到右 */
  const lenA = a.length;
  const lenB = b.length;
  const arrA = a.split('').reverse(); // arrA = ['9', '8', '9', '8']
  const arrB = b.split('').reverse(); // arrB = ['1', '1', '1', '1']
  const result = [];
  let sum;

  /* 先比較 a 與 b 的位數，位數比較短的則補 0 進去 */
  if (lenA > lenB) {
    const numZero = lenA - lenB;
    for (let i = 0; i < numZero; i += 1) {
      arrB.push('0');
    }
  } else if (lenA < lenB) {
    const numZero = lenB - lenA;
    for (let i = 0; i < numZero; i += 1) {
      arrA.push('0');
    }
  }
  /* 這邊注意 carry 的初始化要在迴圈外面，不然無法紀錄 carry 的值 */
  let carry = 0;
  for (let i = 0; i < Math.max(lenA, lenB); i += 1) {
    const addAll = Number(arrA[i]) + Number(arrB[i]); // 開始每個元素直式加法相加
    if (addAll >= 10) { // 相加大於 10，需要進位，進位加完後記得設回 0
      sum = addAll % 10;
      sum += carry;
      carry = 0;
      carry += 1;
      result.push(sum);
    } else { // 相加小於 10 則不須進位，但需考慮相加後再加進位會大於 10 的情況，此時 carry 要加 1
      sum = addAll;
      sum += carry;
      carry = 0;
      const sumLast = sum % 10;
      if (sum >= 10) carry += 1;
      result.push(sumLast);
    }
  }
  if (carry !== 0) result.push(carry); // 加到最後若還有進位要在 push 進去
  result.reverse();
  return result.join('');
}
console.log(add('12312383813881381381', '129018313819319831'));
module.exports = add;
