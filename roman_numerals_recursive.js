function to_roman(input) {
  const numeral = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  const roman = ['M','DM','D','CD','C','LC','L','XL','X','IX','V','IV','I']
  let result = ''
  if(input === 0){
    return result
  }else{
    for(let i = 0 ; i < numeral.length ;i++){
      if(input >= numeral[i]){
         return result += roman[i] + to_roman(input - numeral[i])
      }
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
