function checkParentheses(str) {
  let count = 0,
    strLength = str.length,
    newArr = [];

  if (!strLength) {
    return "PLEASE ENTER A STRING";
  }

  if (strLength % 2 !== 0) {
    return false;
  }

  while (count < strLength) {
    let index = str[count];
    if (index === "(") {
      newArr.push(index);
    } else if (index === ")") {
      if (newArr.length) {
        newArr.pop();
      } else {
        return false;
      }
    }
    count++;
  }
  return true;
}

//TEST uncomment below to run test
// console.log("Test 1", checkParentheses(")()(()()")); //false
// console.log("Test 2", checkParentheses("()()()(((())))")); //true
// console.log("Test 3", checkParentheses(")()()()(")); //false
// console.log("Test 4", checkParentheses(10)); //PLEASE ENTER A STRING
