function to_roman(input) {
  if(input < 1){
    return '';
  } else {
  // your implementation code here
  var angkaArab = [1,4,5,9,10,40,50,100,400,500,900,1000];
  var angkaromawi = ['I','IV','V','IX','X','XL','L','C','CD','D','CM','M'];
  
  var getRoman = '';
  for(var i=angkaArab.length-1; i>=0; i--){
    if(input >= angkaArab[i]){
      // console.log(angkaArab[i]);
      getRoman = angkaromawi[i];
      var newNum = input-angkaArab[i];
      break;
    }
  }
  // return getRoman + '' + newNum;
  return getRoman + '' + to_roman(newNum);

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
