function to_roman(input, roman) {
  var romanNumbering =[
                        ['I', 1],
                        ['IV', 4],
                        ['V', 5],
                        ['IX', 9],
                        ['X', 10],
                        ['XL', 40],
                        ['L', 50],
                        ['LC', 90],
                        ['C', 100],
                        ['CD', 400],
                        ['D', 500],
                        ['DM', 900],
                        ['M', 1000]
                      ];
  var closest;
  var closestRoman;
  if (input === 0){
    return roman;
  }

  for (var i = 0; i < romanNumbering.length; i++) {
    if (input >= romanNumbering[i][1]){
      closest = romanNumbering[i][1];
      closestRoman = romanNumbering[i][0];
    }
  }
  if (roman === undefined){
    roman = '' + closestRoman;
  } else{
     roman += closestRoman;
  }
  var reducInput = input - closest;
  return to_roman(reducInput, roman);
}

  console.log('My totally sweet testing script for new roman\n')
  console.log('input | expected | actual')
  console.log('——————|——————————|————————')
  console.log('4     | IV       | ', to_roman(4))
  console.log('9     | IX       | ', to_roman(9))
  console.log('23    | XXIII    | ', to_roman(23))
  console.log('1453  | MCDLIII  | ', to_roman(1453))
  console.log('1646  | MDCXLVI  | ', to_roman(1646))
