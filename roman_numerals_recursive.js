function to_roman(input) {
  // start your code here
  var roman = ['I','IV','V','IX','X','XL','L','LX','C','CD','D','DC','M'];
  var hasilRoman = [1,4,5,9,10,40,50,60,100,400,500,600,1000];

  //STOPPER
  if(input == 0) {
    return ''
  }

  //REKURSIF
  for(var i = hasilRoman.length-1; i >= 0; i--) {
    if (input - hasilRoman[i] >= 0) {
      return roman[i] + to_roman(input - hasilRoman[i])
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
