/*
1. Create 2 arrays inside the to_roman function. 1 for roman numerals, 1 for integers, their indexes should correspond
2. Create a base case with condition: if target equals to 0, return empty string
3. Create a recursive case
    4. Within the recursive case create a for loop to go through the number array
    5. Within the for loop, create a while loop with condition
    6. If the condition is met return roman[i] + call recursive (arguement - number[i])

 */
let to_roman = (target) => {
    let number = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    let roman = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  
    if(target === 0){
        return '';
    } else {
        for(let i=0; i<number.length; i++){
            while(number[i] <= target){
                return roman[i] + to_roman(target - number[i]);
            }
        }
    }
}

console.log('My totally sweet testing script \n');
console.log('input | expected | actual ');
console.log('______|__________|________');
console.log('4     |IV        |',to_roman(4));
console.log('9     |IX        |',to_roman(9));
console.log('23    |XXIII     |',to_roman(23));
console.log('1453  |MCDLIII   |',to_roman(1453));
console.log('1646  |MDCXLVI   |',to_roman(1646));