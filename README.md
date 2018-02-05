# roman-numerals-recursive

1. set a new array that 'numbers' that lists all the possible number that a roman numeral conversion has
2. set a new array 'romans' that converses all possible string output of roman numerals
3. set a variable with new empty string

4.a set an if statement such that if input number is 0, will return an empty string
4.b set an else statement:
    4.b.1 set a (for) loop such that will iterate over the length of arrays in number (step 1):
        4.b.1.1. set an if statement such that if input number divided by numbers at corresponding index is greater than or equals to 1:
            4.b.1.1.1 assign variable 'str' (step 3) to the array of roman numeral at corresponding index
            4.b.1.1.2 diminish the input number value by the number array at corresponding index
            4.b.1.1.3 set a break statement, such that it will exit the process
        ENDIF
    ENDFOR
    4.b.2 return the str variable and the recursive function with input from step 4.b.1.1.2
