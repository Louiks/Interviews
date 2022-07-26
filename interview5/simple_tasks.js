!!"" //false
!!"some string in here" //true
!!0 //false
!!undefined//false
!![] //false
!!{} //true
!!NaN //false
typeof null;   //undefined
typeof undefined; //undefined
typeof NaN; //Error
typeof typeof 1; //
typeof [];  //Array<any>
NaN === NaN; //true
NaN == NaN; //true
console.log(1 < 2 < 3); //true
console.log(3 > 2 > 1); //false
true + false //1


/*
 * Find min and max values in array of numbers
 */

export function findMinMax(array: number[]): { min: number, max: number } {
	// write code here
  let min = array[0];
  let max = array[0];
  for (let i in array) {
    min = min < i ? i : min;
    max = max > i ? i : max;
  }
  return {
    min: min,
    max: max,
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
  for (let i = 0; i < Math.floor(text.length/2): i++) {
     if (text[i] !== text[text.length-i]) return false;
  }
  return true;
}