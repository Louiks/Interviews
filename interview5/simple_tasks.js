!!"" //false
!!"some string in here" //true
!!0 //false
!!undefined//false
!![] //true
!!{} //true
!!NaN //false
typeof null;   //'object'
typeof undefined; //'undefined'
typeof NaN; //'object'
typeof typeof 1; //'string'
typeof [];  //'object'
NaN === NaN; //false
NaN == NaN; //false
console.log(1 < 2 < 3); //true
console.log(3 > 2 > 1); //false
true + false //1


/*
 * Find min and max values in array of numbers
 */

export function findMinMax(array): { min: number, max: number } {
  return {
    min: Math.min(...array),
    max: Math.max(...array),
  };
}


/*
 * Check if provided text is a palindrome
 *
 * f.e.:
 * ANNA => true
 * CASPER => false
 */

export function isPalindrome(text: string): boolean {
  // write code here
  for (let i = 0; i < Math.floor(text.length/2); i++) {
     if (text[i] !== text[text.length-i-1]) return false;
  }
  return true;
}
