function to_roman(input) {
  var arabic = input;
  var roman = [["M",1000],["D",500],["CD",400],["C",100],["L",50],["XL",40],["X",10],["IX",9],["V",5],["IV",4],["I",1]];
  var hasil = "";
  
  if(input > 0){
	  for(var i=0; i<roman.length; i++){
		  if(arabic >= roman[i][1]){
			  hasil += roman[i][0];
			  return hasil += to_roman(arabic - roman[i][1]);
		  }
	  }
  }
  
  
  return hasil;
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('23    | XXIII    | ', to_roman(23))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
