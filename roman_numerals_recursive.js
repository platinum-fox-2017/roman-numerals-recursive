function toRoman(num){
  // let kamusRoman = ['M','C','D','DC', 'C', 'CX', 'L', 'LX', 'X', 'IX', 'V', 'IV', 'I']
  // let ejaanArabic = [1000,900,500,400,100,90,50,40,10, 9, 5,4,1]
  let nilais = [{
      romanNumeral : "M",
      digits : 1000,
  },
  {
      romanNumeral : "C",
      digits : 900,
  },
  {
      romanNumeral : "D",
      digits : 500,
  },
  {
      romanNumeral : "CD",
      digits : 400,
  },
  {
      romanNumeral : "C",
      digits : 100,
  },
  {
      romanNumeral : "CX",
      digits : 90,
  },
  {
      romanNumeral : "L",
      digits : 50,
  },
  {
      romanNumeral : "XL",
      digits : 40,
  },
  {
      romanNumeral : "X",
      digits : 10,
  },
  {
      romanNumeral : "XI",
      digits : 9,
  },
  {
      romanNumeral : "V",
      digits : 5,
  },
  {
      romanNumeral : "IV",
      digits : 4,
  },
  {
      romanNumeral : "I",
      digits : 1,
  }]
  let hasil = ""
  if(num <= 0){
      return ""
  }else{
      // for (let [index, value] of ejaanArabic.entries()) {
      //     if(num / value >=1){
      //         return kamusRoman[index] + toRoman(num - value)
      //     }
      // }

      const result = nilais.filter(nilai =>{
          let hasilBagi = num / nilai.digits
          if(hasilBagi >= 1){
              return nilai
          }
      })

      return result[0].romanNumeral + toRoman(num - result[0].digits)
  }
  
}

console.log(toRoman(4))
console.log(toRoman(9))
console.log(toRoman(23))
console.log(toRoman(1453))
console.log(toRoman(1646))