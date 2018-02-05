function to_roman(input) {
  var number=[1000,900,500,400,100,90,50,40,10,9,5,4,1]
  var romawi=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  if(input<1){
    return ''
  }
  else{
    var simpan=''
    for(let i=0;i<number.length;i++){
      if(input>=number[i]){
        simpan += romawi[i]
        input=input-number[i]
        break;
      }
    }
    return simpan+to_roman(input);
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
