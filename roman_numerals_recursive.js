function to_roman(input) {
  // start your code here
  const arabic = [1000,900,600,500,400,100,90,60,50,40,10,9,6,5,4,1]
  const roman = ["M","CM","DC","D","CD","C","XC","LX","L","XL","X","IX","VI","V","IV","I"]
  let hasilConvert =''
  if(input <1){
    return ''
  }
  else{
    for(let i =0; i<arabic.length; i++){
      if(arabic[i]<=input){
        hasilConvert+=roman[i]
        // input-=arabic[i]
        return hasilConvert + to_roman(input-arabic[i])
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
