function to_roman(input) {
  var romanNum=['M','DM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  var num=[1000,900,500,400,100,90,50,40,10,9,5,4,1]
  var roman='';
  if(input>0) {
    for(var i in num) {
      if(input>=num[i]) {
        roman+=romanNum[i];
        return roman+=to_roman(input-num[i]);
      }
    }
  }
  return roman;
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('23    | XXIII    | ', to_roman(23))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
