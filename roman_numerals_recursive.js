function to_roman(input) {
  // start your code here
   // huruf Roman diurutkan dari yang terbesar ke yang terkecil
   var hurufRoman = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
   var i;

   if(input === 0) {
     return '';    
   }
   //looping terhadap isi dari object hurufRoman
  for ( i in hurufRoman ) {
    //selama nilai input  lebih besar dari nilai object hurufRoman yang terpilih
    if( input >= hurufRoman[i] ) {
      //kurang input dengan nilai dari hurufRoman yang terpilih
      input -= hurufRoman[i];
      return   i + to_roman(input);
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
