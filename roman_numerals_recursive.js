function to_roman(num) {
  const angka = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

  if (num === 0) {
    return ''
  }
  else {
    for (var i = 0; i < angka.length; i++) {
      if (num >= angka[i]) {
        // console.log(num - angka[i])
        // console.log(roman[i]);
        return roman[i] + to_roman(num - angka[i])
      }
    }
  }
}

// console.log(to_roman(25));
// console.log(to_roman(3400));


console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('23    | XXIII    | ', to_roman(23))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
