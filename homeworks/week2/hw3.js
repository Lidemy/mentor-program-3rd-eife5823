function reverse(str) {
  // 字串反轉
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverse('1,2,3,2,1'));
