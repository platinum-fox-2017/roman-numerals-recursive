function to_roman(input) {
  var hasil = '';
  if(input===0 || input===undefined){
    return hasil;
  } else {
    var arab = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
    var rom = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M']
    for(var i=arab.length-1; i>=0; i--){
      if(input>=arab[i]){
        var sisa = input - arab[i];
        hasil += rom[i];
        break;
      }
    }
    return hasil + to_roman(sisa);
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
