//Solution 1
function to_roman(input) {
  var romanArray = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  var numberArray = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  if (input == 0) {
    return "";
  }

  for (var i = numberArray.length - 1; i >= 0; i--) {
    if (input / numberArray[i] >= 1) {
      return romanArray[i] + to_roman(input -= numberArray[i])
    }
  }
}

//Solution 2
function to_roman(input) {
  var romanObject = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  if (input == 0) {
    return "";
  }

  for (var i in romanObject) {
    if (input / romanObject[i] >= 1) {
      return i + to_roman(input -= romanObject[i])
    }
  }
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('23    | XXIII    | ', to_roman(23))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
