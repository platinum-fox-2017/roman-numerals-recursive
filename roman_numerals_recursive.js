function to_roman(number) {
  // start your code here
  let romans = ['M', 'DC', 'D', 'CD', 'C', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let arabics = [1000, 600, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1]
  let resultRomantoArabic = ''
  let i = 0;
  // Melakukan Pengulangan Selama Panjang Kamus arabics
  if (number === 0) {
    return ''
  } else {
    while (i < arabics.length) {
      if (number >= arabics[i]) {
        return resultRomantoArabic += romans[i] + to_roman(number - arabics[i])
      }
      i++;
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
