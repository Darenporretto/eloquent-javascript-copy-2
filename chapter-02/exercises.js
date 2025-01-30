
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/
/*
I: Function takes in a number represented by 'size'. 
O: Function should output the dsired triangle size when logged to the console. 
C: N/A
E: N/A
*/

function triangles(size) {
  // Loop through numbers 1 to 'size'
  for (let i = 1; i <= size; i++) {
    // Log the triangle size
    console.log('#'.repeat(i));
  }
}

// // Example 1: Triangle of size 3
// triangles(3);
// // Output:
// // #
// // ##
// // ###

// // Example 2: Triangle of size 5
// triangles(5);
// // Output:
// // #
// // ##
// // ###
// // ####
// // #####

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/
/*
I: Function takes in two numbers represented by the parameters 'start' and 'end'. 
O: Function should access each number from start to end log diffferent statements depending on the number. 
C:
E:
*/
function fizzBuzz(start, end) {
  // Use a for loop from start to end
  for (let i = start; i <= end; i++) {
    // If divisible by 3 and 5. Loog "fizzbuzz"
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    }
    // Else if diviible by 3, log "fizz"
    else if (i % 3 === 0) {
      console.log("fizz")
    }
    // Else if divisible by 5 logs "buzz"
    else if (i % 5 === 0) {
      console.log("buzz");
    }
    // If the number is not divisible by 3 or 5, log the number
    else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/
/*
I: Function takes in a parameter of `x` that represents the "size" of the chessboard you are going to log.
O: Function should log a collection of spaces and #'s creating the appearance of a chessboard.
C: Must use linebrak characters. 
E: N/A
*/

function drawChessboard(x) {
  // Initialize storage for the chessboard string
  let chessboard = '';

  // Loop through everu row
  for (let i = 0; i < x; i++) {
    let row = '';

    // Create the row
    for (let j = 0; j < x; j++) {
      // Change from space to # by column index and rows
      if ((i + j) % 2 === 0) {
        row += ' ';
      } else {
        row += '#';
      }
    }

    // Insert chessboard and a newline to follow
    chessboard += row + `\n`;
  }

  // Log chessboard
  console.log(chessboard);
}

// Example 1: Chessboard of size 4
// drawChessboard(4);
// Output:
//  # #
// # # 
//  # #
// # # 

// Example 2: Chessboard of size 3
// drawChessboard(3);
// Output:
//  # 
// # #
//  # 

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}