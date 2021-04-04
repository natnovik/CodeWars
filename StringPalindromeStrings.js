function isPalindrome(line) {
    let result;
    if (line === line.split("").reverse().join("")){
      result = true;
      }else {
        result = false;
      }
    return result;
    }
  console.log(isPalindrome('anna'));
  console.log(isPalindrome('walter'));
  console.log(isPalindrome('12321'));
  console.log(isPalindrome('123456'));