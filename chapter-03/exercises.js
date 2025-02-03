////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
I: Function takes in two arguments x and y. 
O: Function Compares the two arguments using Math.min and return the smaller of the two. 
C:
E:
*/
function min(x,y) {
  // Using the Math.min function it will return the smallest of the values passed through it. 
  return Math.min(x, y);
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
I: Function takes in a single positive integer. 
O: 
C:
E:
*/
function isEven(x) {
  // Absolute value for negative integers, Math.abs()
  x = Math.abs(x);

  // Base Cases
  if (x === 0){
    // Returns true, zero is even
    return true; 
  }
  if (x === 1) {
    // Returns false, one is odd
    return false;
  }

  // Recursion subtracts 2 and checks again
  return isEven(x - 2);
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
I: Function takes the two prameters string and char.  
O: Function should return the character count after the looop finishes. 
C:
E:
*/
function countChars(string, char) {
  // Initialize a counter for tracking occurrences
  let count = 0;

  // Loop through every character in the string
  for (let i = 0; i < string.length; i++) {
    // IF target character and currrent character match, increment the count
    if (string[i] === char) {
      count++;
    }
  }

  // Return final character count
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
I: Function takes in a string as it only argument. 
O: Function should return the finsl count of B in the string. 
C:
E:
*/
function countBs(string) {
  // Initialize counter and track occurrence of B
  let count = 0;

  // Loop through all characters in the string
  for (let i = 0; i < string.length; i++) {
    // If the character is B function increments the count
    if (string[i] === 'B') {
      count++;
    }
  }
  // Return the finsl B count
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};