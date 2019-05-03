function capitalize(str) {
  let newStr = ''; // 記得變數要在 if 外宣告，不然會抓不到，let 的作用域
  if (str[0] >= 'a' && str[0] <= 'z') {
    newStr += str[0].toUpperCase() + str.substring(1);
  } else {
    newStr += str;
  }
  return newStr;
}

console.log(capitalize(',hello'));
